import { Button, Container, Paper, TextField, Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
  const nav = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:3004/users", userData);
      console.log(response.status);

      if (response.status === 201) {
        nav("/");
      }

      console.log(response.data);
    } catch (error) {
      console.error("Error posting user data:", error);
    }
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
              label="Enter Name"
              variant="outlined"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Enter Password"
              variant="outlined"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button variant="contained" color="success" onClick={handleSave}>
                Save
              </Button>
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </Box>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default PostUser;
