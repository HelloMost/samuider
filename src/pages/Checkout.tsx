import React from 'react'
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Box, Card, CardContent, TextField } from '@mui/material'

export function Checkout() {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{maxWidth: 345}}>
                <CardContent>
                <TextField id='outlined-basic'></TextField>
                </CardContent>
            </Card>
        </Box>
    )
}