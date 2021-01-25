export default function initBillsController(db) {
  const create = async (req, res) => {
    try {
      console.log(req.body);
      const bill = await db.Bills.create(req.body.newBill);
      res.send({ bill });
    }
    catch (error) {
      console.log(error);
    }
  };
  return {
    create,
  };
}
