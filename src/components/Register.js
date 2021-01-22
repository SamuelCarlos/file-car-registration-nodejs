import React, { useState } from "react";
import "./Register.css";
import "../api.js";
import api from "../api.js";

const Register = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const postItem = async () => {
    setLoading(true);
    const response = await api.post("/cars", form);
    setForm({});
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    clearTimeout();
  };

  const LoadingScreen = () => {
    return <h3>Sending...</h3>;
  };

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="main">
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          <strong>Tag:</strong>
        </label>
        <input
          type="text"
          name="tag"
          value={form.tag}
          onChange={handleChange}
        />

        <label>
          <strong>Brand:</strong>
        </label>
        <input
          type="text"
          name="brand"
          value={form.brand}
          onChange={handleChange}
        />

        <label>
          <strong>Model:</strong>
        </label>
        <input
          type="text"
          name="model"
          value={form.model}
          onChange={handleChange}
        />

        <input
          className="submit"
          type="submit"
          value="Submit"
          onClick={() => {
            postItem();
          }}
        />
      </div>
    </div>
  );
};

export default Register;
