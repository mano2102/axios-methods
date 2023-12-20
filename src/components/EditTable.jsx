import { Box, Button, Container, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTable = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log(`Failed to fetch user with ID ${id}`, error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleEdit = async () => {
    try {

      const response = await axios.put(`http://localhost:3004/users/${id}`, user);
      console.log(response.data);
      if (response.status === 200) {
        nav("/")
      }
    } catch (error) {
      console.log(`Failed to update user with ID ${id}`, error);
    }
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Container
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper elevation={3} sx={{ width: "50%", padding: "20px", borderRadius: "12px" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <TextField

              variant="outlined"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            <TextField

              variant="outlined"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button variant="contained" color={"success"} onClick={handleEdit}>
                Save
              </Button>
              <Button variant="contained" color="error">Cancel</Button>
            </Box>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default EditTable;
