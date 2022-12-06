import { ScrollView, StyleSheet, Text, View } from "react-native";
import react from "react";
import { mainStyle, colors } from "../styles/MainStyle";

export default function Article({ title, content }) {
  return (
    <View style={styles.article}>
      <Text style={mainStyle.headerSmall}>{title}</Text>
      <Text style={mainStyle.textMid}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    backgroundColor: colors.hlAlt,
    borderRadius: 10,
  },
});
