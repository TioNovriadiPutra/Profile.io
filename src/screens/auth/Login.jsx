import React, { useContext, useEffect } from "react";
import MainContainer from "../../containers/MainContainer";
import { useSetRecoilState } from "recoil";
import { navState } from "../../store/NavState";
import ProfileIoHeader from "../../components/organisms/headers/ProfileIoHeader";
import { Image } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import ProfileIoForm from "../../components/molecules/ProfileIoForm";
import { useForm } from "react-hook-form";
import { LoginDataInput } from "../../utils/constant/LoginDataInput";
import { AuthContext } from "../../utils/context/AuthContext";

const Login = ({ navigation }) => {
  const setNav = useSetRecoilState(navState);

  const { control, handleSubmit } = useForm();

  const { login } = useContext(AuthContext);

  useEffect(() => {
    setNav(navigation);
  }, []);

  return (
    <MainContainer>
      <ProfileIoHeader
        title={"PROFILE.IO"}
        btnLabel={"Sign Up"}
        onSubmit={() => navigation.navigate("Register")}
        home
      />

      <View style={styles.imageContainer}>
        <Image source={require("../../assets/image/loginPic.png")} />
      </View>

      <ProfileIoForm
        dataInput={LoginDataInput}
        control={control}
        onPress={handleSubmit(login)}
      />
    </MainContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginTop: 9,
  },
});
