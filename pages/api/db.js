// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodb from "@/utils/mongodb";
import jsondb from "@/jasondb/produkte";
import Produkt from "@/models/Produkt";

export default async function handler(req, res) {
  await mongodb.dbConnect();
  await Produkt.deleteMany();
  await Produkt.insertMany(jsondb.produkte);
  const produkte = await Produkt.find({});

  // res.send ({text: "Daten gespeichert"})
  res.send(produkte);
}
