import { StyleSheet, View } from "react-native";
import React from "react";
import ProfileIoBackButton from "../atoms/ProfileIoBackButton";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/NavState";
import ProfileIoSearchInput from "../atoms/ProfileIoSearchInput";
import { useForm } from "react-hook-form";
import { Colors } from "../../themes/Colors";

const ProfileIoSearchBar = ({ data, setFilter }) => {
  const nav = useRecoilValue(navState);

  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <ProfileIoBackButton onPress={() => nav.navigate("MainApp")} />
      <ProfileIoSearchInput
        control={control}
        onSubmit={handleSubmit((dataInput) => {
          if (dataInput.search !== "") {
            const newData = data.filter((item) => {
              const name =
                item.profile.first_name + " " + item.profile.last_name;
              const itemData = name ? name.toUpperCase() : "".toUpperCase();
              const textData = dataInput.search.toUpperCase();
              return itemData.indexOf(textData) > -1;
            });

            if (newData.length !== 0) {
              setFilter(newData);
            } else {
              const checkSkill = data.filter((item) =>
                item.profile.specialities.some((skill) => {
                  const skillData = skill.label
                    ? skill.label.toUpperCase()
                    : "".toUpperCase();
                  const textData = dataInput.search.toUpperCase();

                  return skillData.indexOf(textData) > -1;
                })
              );

              setFilter(checkSkill);
            }
          } else {
            setFilter([]);
          }
        })}
      />
    </View>
  );
};

export default ProfileIoSearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 12,
    paddingVertical: 12,
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Border,
  },
});
