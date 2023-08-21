import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ProfileIoPorto from "../../molecules/ProfileIoPorto";

const PortoContent = ({ data, cv = true, other }) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        if (other === true) {
          if (item.visibility === true) {
            return <ProfileIoPorto item={item} cv={cv} />;
          }
        } else {
          return <ProfileIoPorto item={item} cv={cv} />;
        }
      }}
    />
  );
};

export default PortoContent;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 120,
    gap: 8,
    paddingTop: 8,
  },
});
