import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../config'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ item }) => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      marginTop: SPACING * 2,
    }}>
      <View style={{
        width: "90%",
        height: SPACING * 14,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: SPACING * 2,
        backgroundColor: colors.white,
      }}>

        <Image style={{
          width: "20%",
          height: SPACING * 12,
          marginLeft: SPACING,
          borderRadius: SPACING * 2,
        }}
          resizeMode="contain"
          source={item.image}
        />

        <View style={{
          width: "80%",
          paddingHorizontal: SPACING,
          height: SPACING * 10,
        }}>
          <Text style={{
            fontFamily: FONTS.bold,
            fontSize: SPACING * 1.6,
          }}>{item.name}</Text>

          <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SPACING * 1.5,
          }}>Rs. {item.price}</Text>

          <View style={{
            flexDirection: "row",
            marginTop: SPACING,
            width: SPACING * 14,
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <TouchableOpacity><Ionicons style={{ color: colors.dark }} name='remove' size={SPACING * 4} /></TouchableOpacity>
            <Text style={{ width: SPACING * 4, height: SPACING * 4, backgroundColor: colors.dark, textAlign: "center", textAlignVertical: "center", color: colors.white, borderRadius: SPACING, fontFamily: FONTS.medium, fontSize: SPACING * 1.5, }}>1</Text>
            <TouchableOpacity><Ionicons style={{ color: colors.cart.button }} name='add-sharp' size={SPACING * 4} /></TouchableOpacity>
          </View>
        </View>

      </View>

    </View >
  )
}

export default ProductCard