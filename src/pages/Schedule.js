import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect, Provider } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { getSchedule } from "../redux/contacts/action";

const Schedule = (props) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#151C22" }}>
        <Text style={{ margin: 12, fontSize: 32, color: "white" }}>
          Schedule now
        </Text>
        <SafeAreaView
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: Dimensions.get("window").width,
          }}
        >
          {props.slot.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: Dimensions.get("window").width / 2 - 24,
                // backgroundColor:
                //   item["firstName"] || item["lastName"] || item["phoneNumber"]
                //     ? "red"
                //     : "lightgreen",
                height: 128,
                borderRadius: 8,
                marginHorizontal: 12,
                marginVertical: 6,
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                props.navigation.navigate("Edit", { time: item.time });
              }}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={
                  item["firstName"] || item["lastName"] || item["phoneNumber"]
                    ? ["#fc0000", "#00d4ff"]
                    : ["#4c669f", "#3b5998", "#192f6a"]
                }
                style={{
                  width: Dimensions.get("window").width / 2 - 24,
                  backgroundColor:
                    item["firstName"] || item["lastName"] || item["phoneNumber"]
                      ? "red"
                      : "lightgreen",
                  height: 128,
                  borderRadius: 8,
                  marginHorizontal: 12,
                  marginVertical: 6,
                  padding: 8,
                  // alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {/* <TouchableOpacity
              key={index}
              style={{
                width: Dimensions.get("window").width / 2 - 24,
                backgroundColor:
                  item["firstName"] || item["lastName"] || item["phoneNumber"]
                    ? "red"
                    : "lightgreen",
                height: 128,
                borderRadius: 8,
                marginHorizontal: 12,
                marginVertical: 6,
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                props.navigation.navigate("Edit", { time: item.time });
              }}
            > */}
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text style={{ color: "white", fontSize: 24 }}>
                  {item.time}
                </Text>
                {/* </TouchableOpacity> */}
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </SafeAreaView>
        <View style={{ marginVertical: 32 }}>
          <Button
            style={{ width: 64 }}
            title="Gallery"
            onPress={() => {
              props.navigation.navigate("Gallery");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    slot: state.Reducer.slot,
  };
};

export default connect(mapStateToProps, null)(Schedule);
