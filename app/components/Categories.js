import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import categories from "../config/categories";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { FONTS } from "../config";

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  }

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={categories}
      horizontal={true}
      contentContainerStyle={{
        marginVertical: SPACING,
        marginLeft: SPACING * 3,
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={{
          marginRight: SPACING * 3,
        }}
          onPress={() => handlePress(item.id)}
        >
          <Text style={[
            { color: colors["white-smoke"], fontSize: SPACING * 1.6, paddingHorizontal: SPACING * 2, paddingVertical: SPACING, fontFamily: FONTS.bold },
            activeCategoryId === item.id && { color: colors.rose, borderTopLeftRadius: SPACING * 3.5, borderBottomLeftRadius: SPACING * 2.5, borderBottomRightRadius: SPACING * 3.5, borderTopRightRadius: SPACING * 2, borderWidth: 2, borderColor: colors.rose, }
          ]}>
            {item.name}
          </Text>
          {/* {activeCategoryId === item.id && (
            <View style={{
              height: SPACING / 2,
              width: SPACING * 4,
              backgroundColor: colors.primary,
              borderRadius: SPACING / 2,
              marginTop: SPACING / 2,
            }}
            />
          )} */}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
