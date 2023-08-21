import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import React, { useRef } from "react";
import ProfileIoAccountSlider from "../../molecules/ProfileIoAccountSlider";
import FeedsContent from "./FeedsContent";
import PortoContent from "./PortoContent";

const WIDTH = Dimensions.get("window").width;

const AccountContent = ({ data, other }) => {
  const page = [
    {
      name: "Feeds",
      data: data.feeds,
    },
    {
      name: "Porto",
      data: data.portfolios,
    },
  ];

  const listPage = useRef(null);

  return (
    <View style={styles.container}>
      <ProfileIoAccountSlider pageRef={listPage} />

      <FlatList
        ref={listPage}
        data={page}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <View style={styles.pageContainer}>
                <FeedsContent
                  data={item.data}
                  isAccount={true}
                  withFooter={false}
                />
              </View>
            );
          } else {
            return (
              <View style={styles.pageContainer}>
                <PortoContent data={item.data} cv={false} other={other} />
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default AccountContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width: WIDTH,
  },
});
