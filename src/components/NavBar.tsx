//import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const pages: string[] = ["home", "tasklist", "taskform", "register"];

  const clickButton = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {pages.map((page) => (
            <Button
              onClick={() => clickButton(page)}
              style={{ color: "white" }}
              id={page}
            >
              {page}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
