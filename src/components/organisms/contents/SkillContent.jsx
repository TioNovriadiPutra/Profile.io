import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ProfileIoSkill from "../../molecules/ProfileIoSkill";

const SkillContent = ({ data }) => {
  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }) => (
        <ProfileIoSkill
          title={item.label}
          subSpeciality={item.subSpecialityRatings}
        />
      )}
    />
  );
};

export default SkillContent;

const styles = StyleSheet.create({
  list: {
    paddingTop: 8,
  },
});
