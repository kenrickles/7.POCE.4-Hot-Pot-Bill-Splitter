export default function peopleModel(sequelize, DataTypes) {
  return sequelize.define(
    'people',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
      billId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'bills',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
