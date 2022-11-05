import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const img = require("../../Assets/anuj.png");

const ChatListItem = () => {
  return (
    <View style={styles.UserChartCard}>
      <Image source={img} style={styles.UserImg} />
      <View style={styles.UserInfoContainer}>
        <View style={styles.UserInfo}>
          <Text style={styles.UserName} numberOfLines={1}>
            Anuj Shaan
          </Text>
          <Text style={styles.LastMsgTime}>7:20 PM</Text>
        </View>
        <Text style={styles.LastMsg} numberOfLines={2}>
          Hello there !!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  UserChartCard: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginRight: 10,
  },
  UserInfoContainer: {
    flex: 1,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'lightgray'
  },
  UserInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  UserName: {
    fontWeight: "bold",
  },
  LastMsgTime: {
    color: "gray",
  },
  LastMsg: {
    color: "gray",
    paddingVertical: 5,
  },
});

export default ChatListItem;
