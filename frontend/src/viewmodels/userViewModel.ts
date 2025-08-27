import { useEffect, useState } from "react";
import type { IUser } from "../models/IUser";
import {
  getAuthUser,
  getUserbyEmail,
  storageUser,
  authenticUser,
} from "../services/storage";

export const useUser = () => {
  const [user, setUser] = useState<IUser>();
  const [email, setEmail] = useState<string | null>();
  const [name, setName] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  const [confirmPassword, setConfirmPassword] = useState<string | null>();
  const [viewPass, setViewPass] = useState(false);
  const [loading, setLoading] = useState(true);

  const findUser = async () => {
    if (email) {
      const response = await getUserbyEmail(email);
      if (!response) {
        console.log("usuario nao cadastrado");
        return false;
      }

      if (response.password === password) {
        // autenticar
        authenticUser(response);
        setUser(response);
        return true;
      }

      return false;
    }
  };

  const generateRandomId = (length = 6) => {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };

  const createUser = async () => {
    const response = await findUser();
    if (!response) {
      if (name && email && password) {
        const newUser: IUser = {
          id: generateRandomId(),
          name: name,
          email: email,
          password: password,
        };
        await storageUser(newUser);
      }
    }
  };

  const handleViewPass = () => {
    setViewPass(!viewPass);
  };

  useEffect(() => {
    const loggedUser = getAuthUser();
    if (loggedUser) {
      setUser(loggedUser);
    }
    setLoading(false);
  }, []);

  return {
    user,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    viewPass,
    findUser,
    createUser,
    handleViewPass,
  };
};
