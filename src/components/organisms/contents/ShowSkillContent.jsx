import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "../../../themes/Colors";
import { Fonts } from "../../../themes/Fonts";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";

const ShowSkillContent = ({ level, ratingId, dataTake }) => {
  const nav = useRecoilValue(navState);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            nav.navigate("QuizIntro", {
              level,
              ratingId,
            })
          }
        >
          <Text style={styles.btnLabel}>Take a test</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Recent Test</Text>

      <FlatList
        data={dataTake}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.takeQuizContainer}>
            <View style={styles.imageTakeQuiz}>
              <Image
                source={
                  item.subSpecialityQuiz.level === "Beginner"
                    ? require("../../../assets/image/starQuiz.png")
                    : item.subSpecialityQuiz.level === "Intermediate"
                    ? require("../../../assets/image/starQuiz2.png")
                    : require("../../../assets/image/starQuiz3.png")
                }
              />
            </View>
            <View>
              <Text style={styles.level}>{item.subSpecialityQuiz.level}</Text>
              <Text style={styles.score}>{item.score}/100</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ShowSkillContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    height: 74,
    backgroundColor: Colors.White,
    marginTop: 14,
    marginBottom: 21,
    marginHorizontal: 8,
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 13,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    backgroundColor: Colors.Orange,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.White,
  },
  label: {
    marginLeft: 18,
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.DarkGrey,
    marginBottom: 14,
  },
  takeQuizContainer: {
    height: 96,
    backgroundColor: Colors.White,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
  },
  list: {
    paddingHorizontal: 8,
    gap: 8,
  },
  imageTakeQuiz: {
    width: 66,
    height: 66,
    backgroundColor: Colors.Green,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  level: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.DarkGrey,
  },
  score: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.LightGrey,
  },
});
