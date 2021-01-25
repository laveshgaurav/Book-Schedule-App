import React from "react";
import {
  Animated,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageDetails from "../components/ImageDetails";

const Gallery = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
    }).start();
  }, [fadeAnim]);
  return (
    <ScrollView>
      <ImageDetails imageSource={require("../asset/1.jpeg")} />
      <ImageDetails imageSource={require("../asset/2.jpeg")} />
      <ImageDetails imageSource={require("../asset/3.jpeg")} />
      <ImageDetails imageSource={require("../asset/4.jpeg")} />
      <ImageDetails imageSource={require("../asset/5.jpeg")} />
      <ImageDetails imageSource={require("../asset/6.jpeg")} />
      <ImageDetails imageSource={require("../asset/7.jpeg")} />
      <ImageDetails imageSource={require("../asset/8.jpeg")} />
      <ImageDetails imageSource={require("../asset/9.jpeg")} />
      <ImageDetails imageSource={require("../asset/10.jpeg")} />
      <ImageDetails imageSource={require("../asset/11.jpeg")} />
      <ImageDetails imageSource={require("../asset/12.jpeg")} />
      <ImageDetails imageSource={require("../asset/13.jpeg")} />
      <ImageDetails imageSource={require("../asset/14.jpeg")} />
      <ImageDetails imageSource={require("../asset/15.jpeg")} />
      <ImageDetails imageSource={require("../asset/16.jpeg")} />
      <ImageDetails imageSource={require("../asset/17.jpeg")} />
      <ImageDetails imageSource={require("../asset/18.jpeg")} />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width / 3,
    height: 256,
  },
});

export default Gallery;
