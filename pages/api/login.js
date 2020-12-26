import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  
  const email = req.query.email;
  const password = req.query.password;
  console.log('Handle email:' + email);
  console.log('Handle password:' + password);
  const users = await db
    .collection("users")
    .find({ email: email, password: password })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
    console.log('Handle Users:' + users.length);
  if (users.length) {
      return res.json(true);
  }
  return  res.json(false);
};

