import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../../../containers/MainContainer";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import ProfileIoQuizButton from "../../../components/atoms/ProfileIoQuizButton";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";

const ShowQuizScore = ({ route }) => {
  const { finalScore } = route.params;

  const nav = useRecoilValue(navState);

  return (
    <MainContainer>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.firstText}>You've got</Text>
          <Text style={styles.score}>{finalScore}</Text>
          <Text style={styles.message}>
            {finalScore === 100
              ? "Perfect!"
              : finalScore >= 60
              ? "Good Job!"
              : "Better Luck Next Time!"}
          </Text>
        </View>

        <ProfileIoQuizButton
          label={"Finish"}
          onPress={() => nav.navigate("QuizCloser")}
        />
      </View>
    </MainContainer>
  );
};

export default ShowQuizScore;

const styles = StyleSheet.create({
  firstText: {
    fontFamily: Fonts.Black,
    fontSize: 40,
    color: Colors.Green,
    textAlign: "center",
  },
  score: {
    fontFamily: Fonts.AppleTea,
    fontSize: 64,
    color: Colors.BlackShade,
    textAlign: "center",
  },
  message: {
    fontFamily: Fonts.Bold,
    fontSize: 32,
    color: Colors.Orange,
    textAlign: "center",
  },
  textContainer: {
    marginHorizontal: 43,
    gap: 49,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 138,
    paddingHorizontal: 24,
    paddingBottom: 35,
  },
});
