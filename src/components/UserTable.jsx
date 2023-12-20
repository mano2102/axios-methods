// ... (imports)
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { getAllUsers } from '../axios/api'
import { useNavigate } from 'react-router-dom'
const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [edit, setEdit] = useState(true);
    const nav = useNavigate();
    
    const handlePost = () => {
        nav("/post")
    }

    const fetchData = useCallback(
        async () => {
            try {
                const res = await getAllUsers();
                setUsers(res);
            } catch (err) {
                console.log(err);
            }
        },
        [setUsers]
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleEdit = (id) => {
        setEdit(!edit);
        nav(`/edit/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3004/users/${id}`);
            console.log(res);
            fetchData(); // Update the data after deletion
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Container sx={{ display: 'flex', justifyContent: "center", height: "100vh", alignItems: "center" }}>
                <TableContainer sx={{ width: "70%" }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} >
                        <TableHead sx={{ backgroundColor: "red" }}>
                            <TableRow>
                                <TableCell align='center' >Id</TableCell>
                                <TableCell align='center' >Name</TableCell>
                                <TableCell align='center' >Password</TableCell>
                                <TableCell align='center'>Delete</TableCell>
                                <TableCell align='center'>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell align='center'>{user.id}</TableCell>
                                    <TableCell align='center'>{user.name}</TableCell>
                                    <TableCell align='center'>{user.password}</TableCell>
                                    <TableCell align='center'>
                                        <Button color='error' variant='contained' onClick={() => handleDelete(user.id)}>Delete</Button>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Button color='warning' variant='contained' onClick={() => handleEdit(user.id)}>Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell>
                                    <Button variant='outlined' color='info' onClick={handlePost}>Post</Button>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default UserTable;
