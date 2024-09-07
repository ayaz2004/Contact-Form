import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const submit = async () => {
    if (values.name === "" || values.email === "" || values.message === "") {
      alert("Please fill all the fields");
      return;
    } else {
      await axios
        .post("http://localhost:1000/api/v1/post", values)
        .then((res) => {
          alert(res.data.message);
        });
      setValues({ name: "", email: "", message: "" });
    }
  };
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="card-contact px-3 py-2">
        <h1>Contact Form</h1>
        <hr />
        <div className="cont-form d-flex flex-column justify-content-around">
          <div>
            <h5>Enter your name</h5>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={values.name}
              onChange={change}
            />
          </div>
          <div>
            <h5>Enter your Email</h5>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={change}
            />
          </div>
          <div>
            <h5>Message</h5>
            <textarea
              placeholder="Enter your message"
              name="message"
              value={values.message}
              onChange={change}
            />
          </div>
          <button className="btn btn-primary" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
