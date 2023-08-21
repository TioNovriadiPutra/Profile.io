import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/app/home/Home";
import CV from "../screens/app/cv/CV";
import Account from "../screens/app/account/Account";
import { Image } from "react-native";
import UpdateProfile from "../screens/app/account/UpdateProfile";
import CreateFeeds from "../screens/app/home/CreateFeeds";
import AddPortfolio from "../screens/app/cv/AddPortfolio";
import ShowPorto from "../screens/app/cv/ShowPorto";
import PortoWebView from "../screens/app/cv/PortoWebView";
import EditPorto from "../screens/app/cv/EditPorto";
import AddSkill from "../screens/app/cv/AddSkill";
import ShowSkill from "../screens/app/cv/ShowSkill";
import OtherAccount from "../screens/app/account/OtherAccount";
import OtherCV from "../screens/app/cv/OtherCV";
import QuizIntro from "../screens/app/cv/QuizIntro";
import Quiz from "../screens/app/cv/Quiz";
import ShowQuizScore from "../screens/app/cv/ShowQuizScore";
import QuizCloser from "../screens/app/cv/QuizCloser";
import Search from "../screens/app/home/Search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateFeeds"
        component={CreateFeeds}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPortfolio"
        component={AddPortfolio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowPorto"
        component={ShowPorto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PortoWebView"
        component={PortoWebView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPorto"
        component={EditPorto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddSkill"
        component={AddSkill}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowSkill"
        component={ShowSkill}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtherAccount"
        component={OtherAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtherCV"
        component={OtherCV}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizIntro"
        component={QuizIntro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowQuizScore"
        component={ShowQuizScore}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizCloser"
        component={QuizCloser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return focused ? (
              <Image source={require("../assets/image/homeActive.png")} />
            ) : (
              <Image source={require("../assets/image/homeInactive.png")} />
            );
          } else if (route.name === "CV") {
            return focused ? (
              <Image source={require("../assets/image/cvActive.png")} />
            ) : (
              <Image source={require("../assets/image/cvInactive.png")} />
            );
          } else if (route.name === "Account") {
            return focused ? (
              <Image source={require("../assets/image/accountActive.png")} />
            ) : (
              <Image source={require("../assets/image/accountInactive.png")} />
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 60,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        },
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="CV" component={CV} options={{ headerShown: false }} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
