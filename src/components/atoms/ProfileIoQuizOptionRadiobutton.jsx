import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";
import { useRecoilState } from "recoil";
import { quizAnswer } from "../../store/QuizState";

const ProfileIoQuizOptionRadiobutton = ({
  dataOption,
  dataIndex,
  setRefresh,
  refresh,
}) => {
  const [answer, setAnswer] = useRecoilState(quizAnswer);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor:
            dataOption.value === answer[dataIndex].valueOption
              ? Colors.BorderGreen
              : Colors.Border,
        },
      ]}
      onPress={() => {
        let data = answer;
        Object.assign(answer[dataIndex], {
          valueOption: dataOption.value,
          correct: dataOption.correct,
        });
        setAnswer(data);
        setRefresh(!refresh);
      }}
    >
      <Text style={styles.label}>{dataOption.label}</Text>

      <View
        style={[
          styles.circle,
          {
            borderColor:
              dataOption.value === answer[dataIndex].valueOption
                ? Colors.BorderGreen
                : Colors.Border,
            backgroundColor:
              dataOption.value === answer[dataIndex].valueOption
                ? Colors.Green
                : Colors.White,
          },
        ]}
      >
        {dataOption.value === answer[dataIndex].valueOption && (
          <Image source={require("../../assets/image/checklist.png")} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileIoQuizOptionRadiobutton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingLeft: 26,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 20,
    justifyContent: "space-between",
    gap: 10,
  },
  label: {
    fontFamily: Fonts.Light,
    fontSize: 16,
    color: Colors.Black,
    flex: 1,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
