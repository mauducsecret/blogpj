import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;
    const addressOnce = req.body.addressOnce;
    const addressTwo = req.body.addressTwo;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;
    const password = req.body.password;
    console.log("===================Start Insert DB===============");
    const userDb = await db.collection("users").insertOne(
        { "firstname" : firstName,
          "lastName" : lastName,
          "email" : email,
          "password": password,
          "addressOnce" : addressOnce,
          "addressTwo" : addressTwo,
          "city" : city,
          "state" : state,
          "zipcode": zipcode
        }
     );
     console.log("===================End Insert DB===============");
    if (userDb) {
        console.log("===================Success Insert DB===============");
        return res.json(true);
    }

    return res.json(false);
};