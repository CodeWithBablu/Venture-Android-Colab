import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../config'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import Ionicons from 'react-native-vector-icons/Ionicons';


const OrderHistory = ({ item }) => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      marginTop: SPACING * 2,
      color: colors.dark,
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
            color: colors.dark,
            fontSize: SPACING * 1.6,
          }}>{item.name}</Text>

          <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SPACING * 1.5,
          }}>Rs. {item.price}</Text>

          <View style={{
            flexDirection: "row",
          }}>

            <Text style={{
              color: colors.rose,
              fontFamily: FONTS.medium,
              fontSize: SPACING * 1.5,
            }}>Delivered On : </Text>

            <Text style={{
              color: colors['white-smoke'],
              fontFamily: FONTS.medium,
              fontSize: SPACING * 1.5,
            }}>29/11/2022</Text>

          </View>


        </View>

      </View>

    </View >
  )
}

export default OrderHistory