import "./App.css";
import Box from "@mui/material/Box";
import {
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useState } from "react";
function App() {
  const [textvalues, changetextvalues] = useState("");
  const [todos, changetodos] = useState([]);
  const submitbtn = () => {
    changetodos([...todos, textvalues]);
    changetextvalues("");
  };
  const handleDelete = (index) => {
    changetodos(todos.filter((todos, i) => i !== index));
  };

  return (
    <div className="todobox">
      <Box
        sx={{
          boxShadow: 12,
          margin: 2,
          padding: 2,
        }}
      >
        <Box>
          <Typography sx={{ textAlign: "center" }}>REMINDER APP</Typography>

          <TextField
            onChange={(e) => changetextvalues(e.target.value)}
            value={textvalues}
            sx={{
              width: "350px",
              marginRight: "8px",
              marginTop: "10px",
            }}
            label="Enter a reminder"
            variant="outlined"
            size="small"
          />
          <Button
            onClick={submitbtn}
            sx={{
              width: "170px",
              marginTop: "10px",
            }}
            variant="contained"
          >
            Add a reminder
          </Button>
        </Box>
        <Box sx={{ width: "300px" }}>
          <List
            style={{ flexWrap: "wrap" }}
            sx={{
              justifyContent: "center",
              listStyle: "none",
              gap: "10px",
            }}
          >
            {todos.map((text, index) => (
              <ListItem key={index}>
                <div className="todostyles">
                  <ListItemText
                    sx={{ height: "20px" }}
                    primary={text.toUpperCase()}
                    className="todostyles"
                  />
                  <Button
                    onClick={() => handleDelete(index)}
                    sx={{ width: "30px", height: "40px" }}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </div>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
}

export default App;
