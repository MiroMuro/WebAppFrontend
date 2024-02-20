import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  Input,
  Box,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { useState } from "react";
import { login } from "../service/UserService";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async () => {
    event?.preventDefault();
    const response = await login(credentials.email, credentials.password);
    console.log(response.data);
  };
  const onInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      style={{
        border: "2px solid gray",
        maxWidth: 550,
        margin: "50px auto 0px auto",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      sx={{ display: "flex", flexWrap: "nowrap" }}
      onSubmit={handleSubmit}
    >
      <Card
        variant="outlined"
        sx={{ maxWidth: 275, minHeight: 300, justifyContent: "center" }}
      >
        <CardHeader
          style={{
            borderBottom: "2px solid gray",
            backgroundColor: "lightblue",
          }}
          title="Login"
        ></CardHeader>
        <CardContent style={{ justifyContent: "center" }}>
          <FormControl style={{ padding: "10px" }}>
            <InputLabel>Email:</InputLabel>
            <Input
              onChange={(e) => onInputChange(e)}
              name="email"
              value={credentials.email}
            />
          </FormControl>
          <FormControl style={{ padding: "10px" }}>
            <InputLabel>Password:</InputLabel>
            <Input
              onChange={(e) => onInputChange(e)}
              name="password"
              value={credentials.password}
            />
          </FormControl>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button variant="contained" type="submit">
            <Link to="/home">Login</Link>
          </Button>
        </CardActions>
      </Card>
      <Card variant="outlined" sx={{ minWidth: 275, minHeight: 275 }}>
        <CardHeader
          style={{
            borderBottom: "2px solid gray",
            backgroundColor: "lightblue",
          }}
          title="No account?"
        ></CardHeader>
        <CardMedia
          image="src/assets/login.jpg"
          style={{ height: 0, paddingTop: "56.25%" }}
        ></CardMedia>
        <CardActions style={{ justifyContent: "center", height: "20%" }}>
          <Button variant="contained" type="submit">
            <Link to="/register">Register</Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default LoginForm;
