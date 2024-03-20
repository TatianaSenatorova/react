import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import '../App.css';

function Text() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Size"
            id="outlined-size-normal" 
           />
        </div>
      </Box>
    </>
  );
}

export default Text;
