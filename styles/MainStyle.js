import { StyleSheet } from "react-native";

const colors = {
  bg: "#fafafa",
  bgAlt: "#cfcfcf",
  text: "#0f0f0f",
  textAlt: "#000",
  hl: "#5E486D",
  hlAlt: "#D19D61",
};

const mainStyle = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
  textMid: {
    fontSize: 15,
    color: colors.text,
  },
  headerBig: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.text,
  },
  headerMid: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.text,
  },
  headerSmall: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
});

export { colors, mainStyle };
