import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../utils/context/AuthContext";
import AuthStack from "../routers/AuthStack";
import AppStack from "../routers/AppStack";
import LoadingScreen from "../components/templates/LoadingScreen";

const AppNav = () => {
  const { token, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppNav;
