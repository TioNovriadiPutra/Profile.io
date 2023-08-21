import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ProfileIoFeeds from "../../molecules/ProfileIoFeeds";

const FeedsContent = ({ data, isAccount = false, withFooter = true }) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <ProfileIoFeeds
          item={item}
          isAccount={isAccount}
          withFooter={withFooter}
        />
      )}
    />
  );
};

export default FeedsContent;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 68,
  },
});
