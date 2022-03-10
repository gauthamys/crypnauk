import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import { useState } from 'react';

export default function Task(props){
    const [display, toggleDisplay] = useState(true);
    return(
        <>
            <Paper sx={{
                width: "60%",
                position: "relative",
                left: "50%",
                transform: "translate(-50%, 0)",
                backgroundColor: "white",
                borderRadius: "5px",
                p: 2,
                px: 3,
                mb: 1
            }} elevate={3}>
                <Box>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                    <Typography variant="h6" sx={{color: "#003979"}}>
                    <b>Task Title</b>
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="contained" sx={{
                        mx: 1,
                        backgroundColor: "#003979"
                    }}>
                        Completed
                    </Button>
                    <Button variant="contained" color="error">Deleted</Button>
                    </Grid>
                </Grid>
                </Box>
            </Paper>
        </>
    )
}