#!/usr/bin/env node

import "dotenv/config";
import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;

// mongoose
/* try {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(err);
}

mongoose.connection.on("error", (err) => {
  console.error(err);
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));
