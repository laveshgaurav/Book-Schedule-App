import React from "react";
import { Animated, StyleSheet, Text, View, Image } from "react-native";

const ImageDetails = ({ imageSource }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={{
        display: "flex",
        flexDirection: "row",
        margin: 8,
        opacity: fadeAnim,
      }}
    >
      <View style={{ display: "flex", flex: 1 }}>
        <Image source={imageSource} style={{ width: "100%" }} />
      </View>
    </Animated.View>
  );
};

export default ImageDetails;
