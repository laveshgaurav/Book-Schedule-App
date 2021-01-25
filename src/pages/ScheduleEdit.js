import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import { bookSchedule } from "../redux/contacts/action";

const ScheduleEdit = (props) => {
  console.log(props.route.params.time);
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [ph, setPh] = useState("");
  const [data, setData] = useState({});

  function searchWithTime() {
    const searchData = props.slot.find((item) => item.time == time);
    console.log(searchData);
    setFn(searchData.firstName);
    setLn(searchData.lastName);
    setPh(searchData.phoneNumber);
  }

  const time = props.route.params.time;

  React.useEffect(() => {
    searchWithTime();
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 12,
          marginVertical: 18,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ alignSelf: "center", fontSize: 32 }}>{time}</Text>
        <TextInput
          placeholder="First Name"
          value={fn}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 8,
            marginVertical: 12,
          }}
          onChangeText={(text) => setFn(text.trim())}
        />
        <TextInput
          placeholder="Last Name"
          value={ln}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 8,
            marginVertical: 12,
          }}
          onChangeText={(text) => setLn(text.trim())}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="Phone Number"
          value={ph}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 8,
            marginVertical: 12,
          }}
          onChangeText={(text) => setPh(text)}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            height: 32,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            borderRadius: 6,
          }}
          onPress={() => {
            setFn(""), setLn("");
            setPh("");
          }}
        >
          <Text style={{ color: "white" }}>CLEAR</Text>
        </TouchableOpacity>
        <Button
          title="SAVE"
          onPress={() => {
            props.bookSchedule(time, fn, ln, ph);
            props.navigation.navigate("Home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    slot: state.Reducer.slot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookSchedule: (time, fn, ln, ph) =>
      dispatch(bookSchedule(time, fn, ln, ph)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleEdit);
