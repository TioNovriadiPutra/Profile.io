import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Animated,
  FlatList,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { useController, useForm } from "react-hook-form";
import useFetchData from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/Endpoint";
import ProfileIoAccountFeeds from "./ProfileIoAccountFeeds";
import { useRecoilState } from "recoil";
import { refreshState } from "../../store/RefreshState";

const ProfileIoCommentButton = ({ data, feedsId }) => {
  const { control, handleSubmit } = useForm();

  const { field } = useController({
    name: "desc",
    defaultValue: "",
    control,
  });

  const [refresh, setRefresh] = useRecoilState(refreshState);

  const { fetchFunction } = useFetchData();

  const modalContainer = useRef(new Animated.Value(0)).current;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    Animated.timing(modalContainer, {
      toValue: 528,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalContainer, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const postComment = (data) => {
    fetchFunction(
      API_ACCESS.commentFeeds + `/${feedsId}`,
      "POST",
      true,
      false,
      data
    );
    field.onChange("");
    closeModal();
    setTimeout(() => {
      setRefresh(!refresh);
    }, 1000);
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={openModal}>
      <Image source={require("../../assets/image/comment.png")} />

      <Text style={styles.desc}>{data.length}</Text>

      <Modal visible={showModal} transparent>
        <View style={styles.container}>
          <Animated.View
            style={[styles.commentContainer, { height: modalContainer }]}
          >
            <View style={styles.modalHeader}>
              <Image source={require("../../assets/image/xWhite.png")} />
              <Text style={styles.title}>Comment</Text>
              <TouchableOpacity onPress={closeModal}>
                <Image source={require("../../assets/image/x.png")} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={data}
              style={styles.list}
              contentContainerStyle={styles.contentList}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.commentUser}>
                  <ProfileIoAccountFeeds
                    displayPic={item.user.profile.display_pic}
                    name={`${item.user.profile.first_name} ${item.user.profile.last_name}`}
                    status={item.user.profile.status}
                    time={item.created_at}
                  />

                  <Text style={styles.descComment}>{item.desc}</Text>
                </View>
              )}
            />

            <View style={styles.commentInput}>
              <View style={styles.comment}>
                <TextInput
                  value={field.value}
                  placeholder="Type something"
                  placeholderTextColor={Colors.Placeholder}
                  onChangeText={field.onChange}
                  style={styles.input}
                />
              </View>

              <TouchableOpacity onPress={handleSubmit(postComment)}>
                <Image source={require("../../assets/image/send.png")} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ProfileIoCommentButton;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  desc: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Grey,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  commentContainer: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.Black,
  },
  list: {
    marginTop: 24,
  },
  contentList: {
    paddingBottom: 16,
  },
  commentInput: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: Colors.Border,
    flexDirection: "row",
    alignItems: "center",
  },
  comment: {
    flex: 1,
    marginRight: 11,
    height: 42,
    borderWidth: 1.5,
    borderColor: Colors.Border,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  input: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
  },
  descComment: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Black,
    marginTop: 10,
    marginLeft: 60,
  },
  commentUser: {
    marginTop: 16,
  },
});
