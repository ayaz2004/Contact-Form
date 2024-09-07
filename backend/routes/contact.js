const router = require("express").Router();
const Contact = require("../models/contact");

router.post("/post", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save().then(
      () => {
        res.status(200).json({ message: "Data saved" });
      },
      () => {
        res.status(400).json({ message: "Data not saved" });
      }
    );
  } catch (error) {
    res.status(400).json({ message: "Error occured" });
  }
});

module.exports = router;
