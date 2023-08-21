import React, { createContext, useEffect, useState } from "react";
import { API_ACCESS } from "../config/Endpoint";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = async (data) => {
    setIsLoading(true);

    await fetch(API_ACCESS.login, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "Login success!") {
          setToken(json.token);
          setUserId(json.userId);
          AsyncStorage.setItem("@token", json.token);
          AsyncStorage.setItem("@userId", JSON.stringify(json.userId));
        }

        ToastAndroid.show(json.message, ToastAndroid.LONG);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    setToken(null);
    setUserId(null);
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@userId");
    ToastAndroid.show("Logout success!", ToastAndroid.LONG);
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    setIsLoading(true);

    let token = await AsyncStorage.getItem("@token");
    let userId = await AsyncStorage.getItem("@userId");

    if (token) {
      setToken(token);
      setUserId(JSON.parse(userId));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
