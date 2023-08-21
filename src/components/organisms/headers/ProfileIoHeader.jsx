import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import ProfileIoBackButton from "../../atoms/ProfileIoBackButton";
import { Image } from "react-native";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import { TouchableOpacity } from "react-native";

const ProfileIoHeader = ({
  withBack = false,
  title,
  btnLabel = null,
  btnImage = null,
  onSubmit,
  backDest,
  backExtraData = null,
  home = false,
  withSearch = false,
}) => {
  const nav = useRecoilValue(navState);

  return (
    <View style={styles.container}>
      {withBack === true ? (
        <ProfileIoBackButton
          onPress={() => nav.navigate(backDest, backExtraData)}
        />
      ) : (
        <Image
          source={
            home === false
              ? require("../../../assets/image/backWhite.png")
              : require("../../../assets/image/logoWithLetter.png")
          }
        />
      )}

      {home === false && <Text style={styles.title}>{title}</Text>}
      <View style={styles.btnContainer}>
        {withSearch === true && (
          <TouchableOpacity onPress={() => nav.navigate("Search")}>
            <Image source={require("../../../assets/image/search.png")} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onSubmit}>
          {btnLabel === null ? (
            <Image source={btnImage} />
          ) : (
            <Text style={styles.singup}>{btnLabel}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileIoHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 23,
    paddingBottom: 22,
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.DarkGreen,
  },
  singup: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.Green,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
});
