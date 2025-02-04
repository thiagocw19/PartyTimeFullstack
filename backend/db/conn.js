const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://thiago:RWJV1t7FhlSUb9b6@cluster0.qcnoj.mongodb.net/"
    );
    console.log("conectado ao banco");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
