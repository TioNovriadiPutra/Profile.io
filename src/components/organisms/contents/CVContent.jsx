import { View, StyleSheet, Dimensions } from "react-native";
import React, { useRef } from "react";
import { FlatList } from "react-native";
import ProfileIoCVSlider from "../../molecules/ProfileIoCVSlider";
import PortoContent from "./PortoContent";
import SkillContent from "./SkillContent";

const WIDTH = Dimensions.get("window").width;

const CVContent = ({ data, other = false }) => {
  const page = [
    {
      name: "skills",
      data: data.profile.specialities,
    },
    {
      name: "portfolios",
      data: data.portfolios,
    },
  ];

  const listPage = useRef(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={listPage}
        data={page}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled={false}
        renderItem={({ item }) => {
          if (item.name === "skills") {
            return (
              <View style={styles.pageContainer}>
                <SkillContent data={item.data} />
              </View>
            );
          } else if (item.name === "portfolios") {
            return (
              <View style={styles.pageContainer}>
                <PortoContent data={item.data} other={other} />
              </View>
            );
          }
        }}
      />
      <ProfileIoCVSlider pageRef={listPage} />
    </View>
  );
};

export default CVContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width: WIDTH,
  },
});
