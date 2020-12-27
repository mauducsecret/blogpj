import formidable from "formidable";
import { connectToDatabase } from "../../util/mongodb";
const fs = require("fs");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { db } = await connectToDatabase();
      const form = new formidable.IncomingForm({
        multiples: true,
        keepExtensions: true
      });
      form.once("error", console.error);
      form
        .on("fileBegin", (name, file) => {
          console.log("start uploading: ", file.name);
        })
        .on("aborted", () => console.log("Aborted..."));
      form.once("end", () => {
        console.log("Done!");
      });
      await form.parse(req, async (err, fields, files) => {
        if (err) {
          throw String(JSON.stringify(err, null, 2));
        }
        console.log("Start");
        console.log(
          "moving file: ",
          files.file.path,
          " to ",
          `public/upload/${files.file.name}`
        );
        // await fs.rename(
        //   files.file.path,
        //   `public/upload/${files.file.name}`,
        //   err => {
        //     if (err) throw err;
        //   }
        // );
        fs.renameSync(files.file.path, `public/upload/${files.file.name}`);
        req.form = { fields, files };
        console.log("===================Start Insert DB===============");
        const blogDb = await db.collection("blog").insertOne(
          {
            "title": fields.title,
            "content": fields.content,
            "filename": files.file.name
          }
        );
        console.log("===================End Insert DB===============");
        if (blogDb) {
          console.log("===================Success Insert DB===============");
          return resolve(res.json(true));
        }
        return resolve(res.json(false));
      });
    } catch (error) {
      console.log(error);
      return resolve(res.status(403).send(error));
    }
  });
};