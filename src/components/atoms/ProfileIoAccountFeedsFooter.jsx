import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../themes/Colors";
import ProfileIoCommentButton from "./ProfileIoCommentButton";
import ProfileIoLikesButton from "./ProfileIoLikesButton";
import { AuthContext } from "../../utils/context/AuthContext";
import useFetchData from "../../hooks/useFetchData";
import { useRecoilState } from "recoil";
import { IsLoadingModal } from "../../store/LoadingState";
import { API_ACCESS } from "../../utils/config/Endpoint";
import LoadingModal from "../templates/LoadingModal";
import { refreshState } from "../../store/RefreshState";

const ProfileIoAccountFeedsFooter = ({
  comment,
  likes,
  feedsId,
  feedsUserId,
}) => {
  const [isLoadingModal, setIsLoadingModal] = useRecoilState(IsLoadingModal);
  const [refresh, setRefresh] = useRecoilState(refreshState);

  const { userId } = useContext(AuthContext);
  const { fetchFunction } = useFetchData();

  const [likesActive, setLikesActive] = useState(false);

  useEffect(() => {
    const checkActive = likes.filter((data) => data.user_id === userId);

    if (checkActive.length > 0) {
      setLikesActive(true);
    } else {
      setLikesActive(false);
    }
  }, []);

  const like = () => {
    setIsLoadingModal(true);
    fetchFunction(
      likesActive === true
        ? API_ACCESS.unlike + `/${feedsId}`
        : API_ACCESS.like + `/${feedsId}`,
      "POST",
      true
    );
    setRefresh(!refresh);
    setIsLoadingModal(false);
  };

  return (
    <View style={styles.container}>
      <ProfileIoCommentButton data={comment} feedsId={feedsId} />

      <ProfileIoLikesButton
        likesNum={likes.length}
        feedsUserId={feedsUserId}
        feedsId={feedsId}
        active={likesActive}
        onPress={like}
      />

      <LoadingModal visible={isLoadingModal} />
    </View>
  );
};

export default ProfileIoAccountFeedsFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 9,
    borderTopWidth: 1,
    borderColor: Colors.Border,
    gap: 14,
  },
});
