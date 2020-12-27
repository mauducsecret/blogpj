import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const blogs = await db
    .collection("blog")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(blogs);
};