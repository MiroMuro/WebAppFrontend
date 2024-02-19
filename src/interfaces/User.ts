interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const isValidUser = (user: User): boolean => {
  return (
    user.username.length < 3 ||
    user.email.length < 4 ||
    user.password.length < 3
  );
};

export default User;
