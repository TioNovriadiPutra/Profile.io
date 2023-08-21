import { StyleSheet, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import MainContainer from "../../../containers/MainContainer";
import LottieView from "lottie-react-native";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";

const QuizCloser = () => {
  const nav = useRecoilValue(navState);

  const animationSuccess = useRef(null);
  const animationText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animationSuccess.current.play();
    Animated.timing(animationText, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      nav.navigate("MainApp", {
        screen: "CV",
      });
    }, 3500);
  }, []);

  return (
    <MainContainer>
      <View style={styles.container}>
        <LottieView
          ref={animationSuccess}
          source={require("../../../assets/animation/success.json")}
          style={styles.animation}
          loop={false}
        />

        <Animated.Text style={[styles.label, { opacity: animationText }]}>
          Your Assesment is Complete
        </Animated.Text>
      </View>
    </MainContainer>
  );
};

export default QuizCloser;

const styles = StyleSheet.create({
  animation: {
    width: 203,
    height: 203,
  },
  container: {
    alignItems: "center",
    marginHorizontal: 44,
    marginTop: 166,
  },
  label: {
    fontFamily: Fonts.Bold,
    fontSize: 32,
    color: Colors.Orange,
    marginTop: 133,
  },
});
