import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

import { colors } from "./styles/MainStyle";
import ProfileHeader from "./components/ProfileHeader";
import ArticleFeed from "./components/ArticleFeed";
import ProfileOverlay from "./components/ProfileOverlay";

export default function App() {
  const [userName, setUserName] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.statusBarContainer}></View>
      <ProfileHeader name={userName} setDisplay={setDisplayModal} />
      <ArticleFeed />
      <ProfileOverlay
        display={displayModal}
        name={userName}
        setName={setUserName}
        setDisplay={setDisplayModal}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  statusBarContainer: {
    flex: 1,
    width: "100%",
    height: 50,
    minHeight: 50,
    backgroundColor: colors.hl,
  },
});
