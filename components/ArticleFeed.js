import {
  ScrollView,
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { mainStyle, colors } from "../styles/MainStyle";
import Article from "./Article";

export default function ArticleFeed() {
  const lorem =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  const articles = [
    "This is one",
    "This happened aswell",
    "Heres some more stuff",
    "Review of something",
    "No one wrote this",
  ];

  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(true);
    
    // Timeout behaving strange, 100ms feels like 5s
    // Related to state being async?
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Error", "Couldn't load more content", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    }, 100);
  };

  return (
    <View style={{ width: "100%" }}>
      <Text style={{ ...mainStyle.headerMid, margin: 20 }}>
        Todays Articles
      </Text>
      <ScrollView style={{ ...mainStyle.container, ...styles.articleFeed }}>
        {articles.map((title, key) => {
          return <Article title={title} content={lorem} key={key} />;
        })}
        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="large" color={colors.hl} />
          ) : (
            <Button onPress={toggleLoading} title="Load more" />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  articleFeed: {
    display: "flex",
    height: "70%",
    width: "100%",
    backgroundColor: colors.bg,
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
