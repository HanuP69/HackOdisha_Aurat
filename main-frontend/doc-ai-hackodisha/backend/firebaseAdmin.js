import admin from "firebase-admin";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

// Load service account key safely
const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
