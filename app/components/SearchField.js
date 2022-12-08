import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import SPACING from "../config/SPACING";

const SearchField = () => {
  return (
    <View>
      <BlurView style={{
        alignItems: "center",
        borderRadius: SPACING,
        justifyContent: "center"
      }}
        intensity={30}>
        <TextInput style={{
          width: "100%",
          color: colors.white,
          fontSize: SPACING * 1.7,
          padding: SPACING,
          paddingLeft: SPACING * 3.5,
        }}
          placeholder="Find Your fit..."
          placeholderTextColor={colors.light}

        />

        <Ionicons
          name="search"
          style={{
            position: "absolute",
            left: SPACING,
          }}
          color={colors.light}
          size={SPACING * 2}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
