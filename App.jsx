import React from "react";
import { AuthProvider } from "./src/utils/context/AuthContext";
import { RecoilRoot } from "recoil";
import AppNav from "./src/navigation/AppNav";
import { useFonts } from "expo-font";
import LoadingScreen from "./src/components/templates/LoadingScreen";
import {
  MD2LightTheme,
  Provider as PaperProvider,
  configureFonts,
} from "react-native-paper";
import { Fonts } from "./src/themes/Fonts";

const fontConfig = {
  android: {
    regular: {
      fontFamily: Fonts.Regular,
      fontWeight: "normal",
    },
    medium: {
      fontFamily: Fonts.Medium,
      fontWeight: "normal",
    },
    semiBold: {
      fontFamily: Fonts.SemiBold,
      fontWeight: "normal",
    },
    bold: {
      fontFamily: Fonts.Bold,
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...MD2LightTheme,
  fonts: configureFonts({ config: fontConfig, isV3: false }),
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("./src/assets/font/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./src/assets/font/Poppins-Regular.ttf"),
    "Poppins-Black": require("./src/assets/font/Poppins-Black.ttf"),
    "Poppins-Bold": require("./src/assets/font/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./src/assets/font/Poppins-Medium.ttf"),
    "Poppins-Light": require("./src/assets/font/Poppins-Light.ttf"),
    AppleTea: require("./src/assets/font/AppleTea-z8R1a.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <RecoilRoot>
        <PaperProvider theme={theme}>
          <AppNav />
        </PaperProvider>
      </RecoilRoot>
    </AuthProvider>
  );
};

export default App;
