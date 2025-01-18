import mongodb from "../../../utils/mongodb";
import Bestellung from "../../../models/Bestellung";

export default async function handler(req, res) {
  const {
    method,
    query: { nr },
  } = req;
  await mongodb.dbConnect();

  if (method === "GET") {
    try {
      const bestellung = await Bestellung.findById(nr);
      res.status(200).json(bestellung);
    } catch (error) {
      res.status(200).json(error);
    }
  }

  if (method === "PUT") {
    try {
      const bestellung = await Bestellung.findByIdAndUpdate(nr, req.body, {
        new: true,
      });
      res.status(200).json(bestellung);
    } catch (error) {
      res.status(500).json(error);
    }
  }


if (method === "DELETE") {
 try {
    const bestellung = await Bestellung.findByIdAndDelete(nr);
    res.status(200).json(bestellung);
  } catch (error) {
    res.status(500).json(error);
  }
}
}
