import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../config'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import Ionicons from 'react-native-vector-icons/Ionicons';

import moment from 'moment';



const OrderHistoryCard = ({ cartItems, createdAt }) => {

  console.log(cartItems);

  return (
    <View style={{
      width: "90%",
      backgroundColor: colors.orderHistory.primary,
      marginVertical: SPACING,
      borderRadius: SPACING * 2,
    }}>
      {
        cartItems && cartItems.map((item) => (

          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "90%",
              padding: SPACING / 2,
              paddingHorizontal: SPACING,
            }}>

            <Image
              style={{
                width: SPACING * 5,
                height: SPACING * 5,
                borderRadius: SPACING * 2,
              }}

              resizeMode="contain"

              source={item.image}
            />

            <View style={{
              borderRadius: SPACING,
              marginVertical: SPACING / 2,
              paddingVertical: SPACING,
              paddingLeft: SPACING * 1.8,

            }}>

              <Text style={{
                fontFamily: FONTS.bold,
                fontSize: SPACING * 1.5,
                color: colors.dark,
                marginVertical: SPACING / 2,
              }}>{item.name}</Text>

              <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: SPACING * 1.4,
                color: colors.light,
                marginLeft: SPACING * 3,
              }}>quantity: {item.quantity}</Text>

            </View>

          </View>


        ))
      }

      <View style={{
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: SPACING * 2,
        marginTop: SPACING,
        paddingHorizontal: SPACING * 2,
        borderWidth: 2.5,
        borderColor: colors['dark-light'],
        borderStyle: 'dashed',
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        justifyContent: "space-between",
      }}>

        <View style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>

          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 1.6,
            color: colors.icon,
          }}>Order on : </Text>

          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 1.6,
            color: colors.primary,
          }}>{moment(createdAt).format("DD MM YYYY hh:mm:ss")}</Text>

        </View>

        <View style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>

          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 1.6,
            color: colors.icon,
          }}>Shipped at :</Text>

          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 1.6,
            color: colors.primary,
          }}>{moment(createdAt).add(3, 'day').format("DD MM YYYY hh:mm:ss")}</Text>

        </View>


      </View>

    </View>
  )
}

export default OrderHistoryCard