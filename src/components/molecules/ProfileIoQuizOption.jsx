import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../themes/Colors";
import ProfileIoQuizOptionRadiobutton from "../atoms/ProfileIoQuizOptionRadiobutton";

const ProfileIoQuizOption = ({ dataOptions, questionIndex }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataOptions}
        extraData={refresh}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProfileIoQuizOptionRadiobutton
            dataOption={item}
            dataIndex={questionIndex}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        )}
      />
    </View>
  );
};

export default ProfileIoQuizOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    marginTop: 46,
    paddingHorizontal: 14,
    paddingTop: 41,
  },
  list: {
    gap: 20,
    paddingBottom: 20,
  },
});
