import React from "react";
import { Image, StyleSheet } from "react-native";

export const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const source = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image style={styles.image} source={source} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
