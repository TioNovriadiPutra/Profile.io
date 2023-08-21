import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import { Menu } from "react-native-paper";
import { AuthContext } from "../../utils/context/AuthContext";

const ProfileIoMenu = () => {
  const { logout } = useContext(AuthContext);

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);

  const closeMenu = () => setShowMenu(false);

  return (
    <View style={styles.container}>
      <Menu
        visible={showMenu}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={openMenu}>
            <Image source={require("../../assets/image/setting.png")} />
          </TouchableOpacity>
        }
        contentStyle={styles.menuContent}
      >
        <Menu.Item title="Logout" onPress={logout} />
      </Menu>
    </View>
  );
};

export default ProfileIoMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  menuContent: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: 29,
    right: 10,
  },
});
