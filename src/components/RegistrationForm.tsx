import { FormControl, FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import User from "../interfaces/User";
import { registerUser } from "../service/TaskService";
const RegistrationForm = () => {
  const [id, setId] = useState<number>(0);
  const [user, setUser] = useState<User>({
    id: 0,
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    setId(id + 1);
    setUser({ ...user, id: id });
    event?.preventDefault();
    await registerUser(user);
    console.log(user);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(e);
    //console.log(e.target.value);
    console.log(user);
  };
  return (
    <FormControl>
      <form onSubmit={handleSubmit}>
        <div>
          <FormLabel>Username</FormLabel>
          <TextField
            type="text"
            size="small"
            variant="filled"
            name="username"
            value={user.username}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <FormLabel>Email</FormLabel>
          <TextField
            type="text"
            size="small"
            variant="filled"
            name="email"
            value={user.email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <FormLabel>Password</FormLabel>
          <TextField
            type="text"
            size="small"
            variant="filled"
            name="password"
            value={user.password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </FormControl>
  );
};

export default RegistrationForm;