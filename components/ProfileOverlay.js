import { Modal, StyleSheet, TextInput, Button, Text, View } from "react-native";
import React, { useState } from "react";
import { mainStyle, colors } from "../styles/MainStyle";

export default function ProfileHeader({ display, setName, setDisplay }) {
  if (!display) return;

  const [tempName, setTempName] = useState("");

  return (
    <Modal transparent statusBarTranslucent animationType="fade">
      <View style={styles.outerContainer}>
        <View
          style={{
            padding: 30,
            backgroundColor: colors.bg,
            borderRadius: 10,
            width: "80%",
          }}
        >
          <Text style={{ ...mainStyle.headerSmall, margin: 10 }}>
            Enter your name
          </Text>
          <TextInput
            style={styles.input}
            value={tempName}
            onChangeText={setTempName}
          />
          <Button
            title="Submit!"
            onPress={() => {
              setDisplay(false);
              setName(tempName);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 15,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: colors.bgAlt,
  },
});
