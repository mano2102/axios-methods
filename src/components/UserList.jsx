import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const UserList = () => {
    return (
        <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#1d1d1d", height: "auto" }}>
                <ListItem alignItems='flex-start'>

                    <ListItemAvatar>
                        <Avatar alt={'sample'} src={"name"} />
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Typography
                            sx={{ display: "inline" }}
                            component={'span'}
                            variant='body2'
                            color='#f1f1f1'>
                            Sample
                        </Typography>}
                        secondary={<Typography
                            sx={{ display: 'inline' }}
                            component={'span'}
                            variant='body2'
                            color='#f1f1f1'
                        >sample@gmail.com</Typography>}
                    >

                    </ListItemText>
                </ListItem>


            </List>
        </Container>

    )
}

export default UserList