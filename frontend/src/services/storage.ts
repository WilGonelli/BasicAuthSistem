import type { IUser } from "../models/IUser";

const storageUser = async (user: IUser) => {
  const result = await getUsers();
  result.push(user);
  localStorage.setItem("users", JSON.stringify(result));
};

const getUsers = async () => {
  const result = await localStorage.getItem("users");
  const users = result ? JSON.parse(result) : [];
  return users;
};

const getUserbyEmail = async (email: string) => {
  const result = await getUsers();
  const user: IUser | null = result.find((u: IUser) => u.email === email);
  return user || null;
};

const authenticUser = (user: IUser) => {
  localStorage.setItem("token", JSON.stringify(user));
};

const getAuthUser = () => {
  const response = localStorage.getItem("token");
  return response ? JSON.parse(response) : null;
};

export { storageUser, getUsers, getUserbyEmail, getAuthUser, authenticUser };
