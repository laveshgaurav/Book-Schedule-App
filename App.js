import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { connect, Provider } from "react-redux";
import ScheduleEdit from "./src/pages/ScheduleEdit";
import store from "./src/redux/store";
import Schedule from "./src/pages/Schedule";
import Gallery from "./src/pages/Gallery";

const Stack = createStackNavigator();
// {
//   Home: Schedule,
//   Edit: ScheduleEdit,
// },
// {           s
//   initialRouteName: "Home",
// }

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Schedule} />
          <Stack.Screen name="Edit" component={ScheduleEdit} />
          <Stack.Screen name="Gallery" component={Gallery} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const App = createAppContainer(Stack);
export default App;
