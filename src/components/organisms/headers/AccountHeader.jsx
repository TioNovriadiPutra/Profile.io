import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";
import { API_ACCESS, LOCAL_DRIVE } from "../../../utils/config/Endpoint";
import ProfileIoMenu from "../../atoms/ProfileIoMenu";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import ProfileIoAccountStat from "../../molecules/ProfileIoAccountStat";
import ProfileIoBackButton from "../../atoms/ProfileIoBackButton";
import useFetchData from "../../../hooks/useFetchData";
import { refreshState } from "../../../store/RefreshState";

const AccountHeader = ({ data, other = false, followStatus }) => {
  const nav = useRecoilValue(navState);
  const [refresh, setRefresh] = useRecoilState(refreshState);

  const { fetchFunction } = useFetchData();

  return (
    <View style={styles.container}>
      {other == false ? (
        <ProfileIoMenu />
      ) : (
        <ProfileIoBackButton onPress={() => nav.navigate("Home")} />
      )}

      <View style={styles.displayPicContainer}>
        <Image
          source={
            data.profile.display_pic === null
              ? require("../../../assets/image/profilePic.png")
              : { uri: LOCAL_DRIVE + data.profile.display_pic }
          }
          style={styles.displayPic}
        />

        <Text
          style={styles.name}
        >{`${data.profile.first_name} ${data.profile.last_name}`}</Text>

        <Text style={styles.status}>{data.profile.status}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (other === false) {
              nav.navigate("UpdateProfile", {
                dataProfile: data,
              });
            } else {
              fetchFunction(
                followStatus === true
                  ? API_ACCESS.unfollow + `/${data.id}`
                  : API_ACCESS.follow + `/${data.id}`,
                "POST",
                true
              );
              setRefresh(!refresh);
            }
          }}
        >
          <Text style={styles.btnLabel}>
            {other === false
              ? "Edit"
              : followStatus === true
              ? "Unfollow"
              : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>

      <ProfileIoAccountStat data={data} />
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 23,
  },
  displayPicContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  displayPic: {
    width: 84,
    height: 84,
    borderRadius: 50,
    resizeMode: "contain",
  },
  name: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.Black,
    marginTop: 6,
  },
  status: {
    fontFamily: Fonts.Medium,
    fontSize: 12,
    color: Colors.Grey,
    marginTop: 1,
  },
  btn: {
    backgroundColor: Colors.Green,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 8,
  },
  btnLabel: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.White,
  },
});
