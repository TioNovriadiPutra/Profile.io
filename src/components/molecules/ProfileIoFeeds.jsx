import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import ProfileIoAccountFeeds from "../atoms/ProfileIoAccountFeeds";
import { Fonts } from "../../themes/Fonts";
import { FEEDS_LOCAL_DRIVE } from "../../utils/config/Endpoint";
import { Video, ResizeMode } from "expo-av";
import ProfileIoAccountFeedsFooter from "../atoms/ProfileIoAccountFeedsFooter";
import { useRecoilValue } from "recoil";
import { dataUser } from "../../store/AccountSliderState";

const ProfileIoFeeds = ({ item, withFooter = true, isAccount = false }) => {
  const user = useRecoilValue(dataUser);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ProfileIoAccountFeeds
          displayPic={
            isAccount === false
              ? item.user.profile.display_pic
              : user.displayPic
          }
          name={`${
            isAccount === false ? item.user.profile.first_name : user.firstName
          } ${
            isAccount === false ? item.user.profile.last_name : user.lastName
          }`}
          status={isAccount === false ? item.user.profile.status : user.status}
          time={isAccount === false ? item.created_at : null}
          isAccount={isAccount}
          dataId={isAccount === false ? item.user.id : null}
        />

        <Text style={styles.desc}>{item.desc}</Text>

        {item.image_url !== null ? (
          <Image
            source={{ uri: FEEDS_LOCAL_DRIVE + item.image_url }}
            style={styles.asset}
          />
        ) : item.video_url !== null ? (
          <Video
            source={{
              uri: FEEDS_LOCAL_DRIVE + item.video_url,
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            style={styles.asset}
          />
        ) : null}
      </View>

      {withFooter === true && (
        <ProfileIoAccountFeedsFooter
          comment={item.comments}
          likes={item.likes}
          feedsId={item.id}
          feedsUserId={item.user.id}
        />
      )}
    </View>
  );
};

export default ProfileIoFeeds;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    marginTop: 8,
    paddingTop: 18,
  },
  content: {
    paddingHorizontal: 32,
  },
  desc: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Black,
    marginVertical: 18,
  },
  asset: {
    width: "100%",
    height: 250,
    borderRadius: 14,
    resizeMode: "cover",
    marginVertical: 18,
  },
});
