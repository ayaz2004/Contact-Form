const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://nazirayaz03:wahida2004@cluster0.4zejn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(
        () => {
          console.log("Connected to MongoDB");
        },
        (error) => {
          console.log(error);
        }
      );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

conn();
