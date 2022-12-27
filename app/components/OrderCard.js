import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../config'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useStateValue } from '../../context/Stateprovider'


const OrderCard = ({ cartItems, totalPrice }) => {

  console.log(cartItems);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        // flex: 1,
        alignItems: "center",
        marginBottom: SPACING,
      }}

        style={{ width: "100%" }}>
        {
          (
            <View style={{
              backgroundColor: colors['dark-light'],
              width: "95%",
              marginTop: SPACING * 2,
              borderRadius: SPACING,
            }}>
              {
                cartItems && cartItems.map((item) => (

                  <View

                    key={item.id}

                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
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
                      width: "100%",
                      borderRadius: SPACING,
                      paddingVertical: SPACING,
                      paddingHorizontal: SPACING * 2,
                      marginTop: SPACING,
                    }}>

                      <Text style={{
                        textAlign: "left",
                        fontFamily: FONTS.bold,
                        fontSize: SPACING * 1.3,
                        color: colors.white,
                        marginBottom: SPACING * 0.8,
                      }}>{item.name}</Text>

                      <Text style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SPACING * 1.4,
                        color: colors.primary,
                        marginLeft: SPACING * 3,
                      }}>quantity: {item.quantity}</Text>

                    </View>

                  </View>


                ))
              }
            </View>
          )
        }
      </ScrollView>

      <View style={{
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
        padding: SPACING * 2,
        marginTop: SPACING,
        paddingHorizontal: SPACING * 2,
        borderWidth: 2.5,
        borderColor: colors.cart.buttonsec,
        borderStyle: 'dashed',
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        justifyContent: "space-between",
      }}>

        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SPACING * 2,
          color: colors.icon,
        }}>Total:</Text>

        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SPACING * 2,
          color: colors.icon,
        }}>Rs. {totalPrice}</Text>
      </View>


    </>
  )
}

export default OrderCard