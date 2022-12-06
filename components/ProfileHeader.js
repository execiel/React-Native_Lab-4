import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { colors, mainStyle } from "../styles/MainStyle";

export default function ProfileHeader({ name, setDisplay }) {
  return (
    <View style={{ ...mainStyle.container, ...styles.mainContainer }}>
      <Text style={{ ...mainStyle.headerBig, color: colors.bg }}>
        Hello{" "}
        {name == ""
          ? "Guest"
          : name.length > 10
          ? `${name.substring(0, 10)}...`
          : `${name}!`}
      </Text>
      <TouchableOpacity onPress={() => setDisplay(true)}>
        {name == "" ? (
          <Image
            style={styles.profileImage}
            source={require("../assets/icon.png")}
          />
        ) : (
          <View style={styles.profileImage}>
            <Text
              style={{ fontSize: 50, fontWeight: "bold", color: colors.bg }}
            >
              {name.substring(0, 1).toUpperCase()}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    minHeight: 100,
    backgroundColor: colors.hl,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: colors.hlAlt,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
