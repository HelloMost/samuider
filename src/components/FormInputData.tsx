import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const FormInputData = () => {
  const [form, setForm] = useState({
    name: "",
    detail: "",
    price: "",
    selectedDate: "",
    selectedTime: "",
  });

  const [data, setData] = useState([]);
  const [atvData, setAtvData] = useState([]);

  useEffect(() => {
    loadData();
    loadAtvData(); // Load ATV data when the component mounts
  }, []);

  const loadData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "mostdata"));
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const loadAtvData = async () => {
    try {
      // Fetch ATV data from Firebase based on a condition (e.g., category is "ATV")
      const querySnapshot = await getDocs(
        collection(db, "mostdata").where("category", "==", "ATV")
      );

      const atvData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAtvData(atvData);
    } catch (error) {
      console.error("Error loading ATV data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddData = async () => {
    try {
      await addDoc(collection(db, "mostdata"), {
        ...form,
        category: "ATV", // Add category information
      });

      // Clear the form after adding data
      setForm({
        name: "",
        detail: "",
        price: "",
        selectedDate: "",
        selectedTime: "",
      });

      loadData(); // Reload all data
      loadAtvData(); // Reload ATV data
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="name"
        value={form.name}
      ></input>
      <input
        onChange={handleChange}
        type="text"
        name="detail"
        placeholder="detail"
        value={form.detail}
      ></input>
      <input
        onChange={handleChange}
        type="text"
        name="price"
        placeholder="price"
        value={form.price}
      ></input>
      <label>
        Select Date:
        <input
          onChange={handleChange}
          type="date"
          name="selectedDate"
          value={form.selectedDate}
        />
      </label>
      <label>
        Select Time:
        <input
          onChange={handleChange}
          type="time"
          name="selectedTime"
          value={form.selectedTime}
        />
      </label>
      <button onClick={handleAddData}>Add data</button>
      <hr />
      <Link to="/Admin">Go to Admin Page</Link>

      {/* Display ATV data */}
      {atvData.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Detail: {item.detail}</p>
          <p>Price: {item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FormInputData;
