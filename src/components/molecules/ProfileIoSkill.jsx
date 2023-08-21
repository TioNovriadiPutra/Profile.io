import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";
import ProfileIoSkillCard from "./ProfileIoSkillCard";

const ProfileIoSkill = ({ title, subSpeciality }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} Skill</Text>
      <FlatList
        data={subSpeciality}
        horizontal
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ProfileIoSkillCard data={item} />}
      />
    </View>
  );
};

export default ProfileIoSkill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingTop: 16,
    paddingBottom: 31,
    borderRadius: 10,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.Black,
    marginLeft: 14,
    marginBottom: 15,
  },
  list: {
    paddingHorizontal: 14,
    gap: 15.53,
  },
});
