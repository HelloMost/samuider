import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box, Button, Card, TextField, MenuItem } from '@mui/material';
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

interface FormInputDataProps {
  // Define your props here if needed
}

const AtvCheckout: React.FC<FormInputDataProps> = () => {
  const [form, setForm] = useState({
    name: "",
    Surname: "",
    tel: "",
    Email: "",
    Hotel: "",
    date: "",
    time: "",
    person: "1",
  });

  const [data, setData] = useState([]);
  const [atvData, setAtvData] = useState([]);

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
      const querySnapshot = await getDocs(
        collection(db, "Samuider").where("category", "==", "ATV")
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'person' ? value : value,
    });
  };

  const handleAddData = async () => {
    try {
      await addDoc(collection(db, "mostdata"), {
        ...form,
        category: "ATV",
      });

      setForm({
        name: "",
        Surname: "",
        tel: "",
        Email: "",
        Hotel: "",
        date: "",
        time: "",
        person: "1",
      });

      loadData();
      loadAtvData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const person = Array.from({ length: 10 }, (_, index) => ({
    value: `${index + 1}persons`,
    label: `${index + 1}`,
  }));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: '5rem' }}>
      <Card sx={{ width: 500 }}>
        <img src='../src/assets/Activity/ATV/image (1).jpg' alt="ATV" />
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', m: '10px' }}>
          <TextField onChange={handleChange} value={form.name} name="name" id="outlined-basic" label="Name" />
          <TextField onChange={handleChange} value={form.Surname} name="Surname" id="outlined-basic" label="Surname" />
          <TextField onChange={handleChange} value={form.tel} name="tel" id="outlined-basic" label="Tel" />
          <TextField onChange={handleChange} value={form.Email} name="Email" id="outlined-basic" label="E-mail" />
          <TextField onChange={handleChange} value={form.Hotel} name="Hotel" id="outlined-basic" label="Hotel" />
          <TextField
            id="outlined-select-person"
            select
            label="Person"
            name="person"
            value={form.person}
            onChange={handleChange}
            helperText="How many persons"
          >
            {person.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', m: '10px' }}>
          <input onChange={handleChange} value={form.date} name="date" type='date'></input>
          <input onChange={handleChange} value={form.time} name="time" type='time'></input>
        </Box>
        <Button onClick={handleAddData}>Add to cart</Button>
      </Card>
    </Box>
  );
};

export default AtvCheckout;
