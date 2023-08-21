import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import ProfileIoAccountFeeds from "../../atoms/ProfileIoAccountFeeds";

const SearchSuggestion = ({ dataUser }) => {
  return (
    <FlatList
      data={dataUser}
      style={styles.list}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <ProfileIoAccountFeeds
            isAccount={false}
            displayPic={item.profile.display_pic}
            name={`${item.profile.first_name} ${item.profile.last_name}`}
            status={item.profile.status}
            dataId={item.id}
            time={null}
          />
        </View>
      )}
    />
  );
};

export default SearchSuggestion;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 14,
    gap: 4,
  },
  itemContainer: {
    paddingVertical: 12,
  },
});
