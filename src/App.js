import { React, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from "@mui/lab";
import Task from "./components/Task";
const { Box } = require("@mui/system");

function App(){
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskDate, setTaskDate] = useState(null);

  return (
    <>
      <div classname="App">
        <Paper elevate={3} sx={{
          p: 2,
          pb: 3,
          width: 600,
          height: 400,
          position: "relative",
          marginTop:"50px",
          left: "50%",
          transform: "translate(-50%, 0)",
          backgroundColor: "white",
          borderRadius: "15px",
          marginBottom: "60px"
        }}>
          <Box sx={{p: 2}}>
          <Typography variant="h4" sx={{
            color: "#003979",
            position: "relative",
            left: "80%",
            transform: "translate(-50%, 0)"
          }}>
              <b>Task Manager</b>
          </Typography>
          <TextField variant="outlined" label="Task Title" sx={{width: "100%", my: 2}}/>
          <TextField variant="outlined" label="Task Description" minRows={4} multiline sx={{width: "100%", mb: 2}}/>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker value={taskDate} 
            label="Date"
            onChange={(newValue) => {setTaskDate(newValue);}} 
            sx={{
              width: "100%"
            }} 
            renderInput={(params) => <TextField sx={{width: "100%"}} {...params} />}/>
          </LocalizationProvider>
          <Grid container sx={{mt: 3}}>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <Button variant="contained" sx={{backgroundColor: "#003979"}}>Create Task</Button>
          </Grid>
          </Grid>
          </Box>
        </Paper>
      </div>
      <Box sx={{textAlign: "center"}}>
      <Typography variant="h5" sx={{
        color: "#003979",
        m: 2
      }}>
        <b>Your Tasks</b>
      </Typography>
      </Box>
      <Task />
      <Task />
    </>
  )
}

export default App;