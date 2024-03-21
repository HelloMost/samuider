// AdminPage.tsx

import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState("");
  const [editSurname, setEditSurname] = useState("");
  const [editTel, setEditTel] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editHotel, setEditHotel] = useState(""); // Added hotel field
  const [editTime, setEditTime] = useState(""); // Added time field
  const [editPerson, setEditPerson] = useState("");// Added person field
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'mostdata'));
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'mostdata', id));
      loadData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setEditName(item.name);
    setEditSurname(item.surname);
    setEditTel(item.tel);
    setEditDate(item.date);
    setEditEmail(item.email);
    setEditCategory(item.category);
    setEditHotel(item.hotel); // Set hotel field
    setEditTime(item.time); // Set time field
    setEditPerson(item.person); // Set person field
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    try {
      await updateDoc(doc(db, 'mostdata', editingItem.id), {
        name: editName,
        surname: editSurname,
        tel: editTel,
        date: editDate,
        email: editEmail,
        category: editCategory,
        hotel: editHotel, // Save hotel field
        time: editTime, // Save time field
        person: editPerson, // Save person field
      });
      setIsEditModalOpen(false);
      setEditingItem(null);
      loadData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Tel</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Hotel</TableCell> {/* Added hotel field */}
              <TableCell align="right">Time</TableCell>  {/* Added time field */}
              <TableCell align="right">Person</TableCell>  {/* Added person field */}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.Surname}</TableCell>
                <TableCell align="right">{item.tel}</TableCell>
                <TableCell align="right">{item.date}</TableCell>
                <TableCell align="right">{item.Email}</TableCell>
                <TableCell align="right">{item.category}</TableCell>
                <TableCell align="right">{item.Hotel}</TableCell> {/* Display hotel field */}
                <TableCell align="right">{item.time}</TableCell> {/* Display time field */}
                <TableCell align="right">{item.person}</TableCell> {/* Display person field */}
                <TableCell align="right">
                  <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={isEditModalOpen}
        onClose={handleCancelEdit}
        aria-labelledby="edit-modal"
        aria-describedby="form to edit data"
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <TextField
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Surname"
            value={editSurname}
            onChange={(e) => setEditSurname(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tel"
            value={editTel}
            onChange={(e) => setEditTel(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Hotel"
            value={editHotel}
            onChange={(e) => setEditHotel(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Time"
            type="time"
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Person"
            value={editTime}
            onChange={(e) => setEditPerson(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCancelEdit}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPage;
