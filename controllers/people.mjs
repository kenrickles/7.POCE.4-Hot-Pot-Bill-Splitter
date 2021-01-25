export default function initPeopleController(db) {
  const create = async (req, res) => {
    try {
      console.log(req.body);
      const people = await db.People.create(req.body.newPerson);
      res.send({ people });
    }
    catch (error) {
      console.log(error);
    }
  };
  return {
    create,
  };
}
