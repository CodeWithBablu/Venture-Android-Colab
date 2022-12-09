import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { FONTS } from '../config'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import OrderHistory from '../components/OrderHistory'

import cartProducts from '../config/cartProducts'

const Orders = () => {

  const [items, setItems] = useState(cartProducts);


  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      <SafeAreaView style={{
        flex: 1,
      }}>

        <View style={{
          flexDirection: "row",
          backgroundColor: colors.white,
          padding: SPACING * 2,
        }}>
          <Text style={{
            marginRight: SPACING,
            fontFamily: FONTS.medium,
            fontSize: SPACING * 3,
            color: colors.dark,
          }}>Order</Text>

          <Text style={{
            fontFamily: FONTS.bold,
            fontSize: SPACING * 3,
            color: colors.dark,
          }}>history</Text>
        </View>

        <View style={{
          flex: 1,
          alignItems: "center",
          marginTop: SPACING * 8,
          backgroundColor: colors.dark,
          borderTopLeftRadius: SPACING * 5,
          borderTopRightRadius: SPACING * 5,
        }}>
          <View style={{
            alignItems: "center",
            width: SPACING * 14,
            height: SPACING,
            borderBottomLeftRadius: SPACING * 2,
            borderBottomRightRadius: SPACING * 2,
            backgroundColor: colors.white,
          }}>

            <View style={{
              width: SPACING * 6,
              height: SPACING / 2,
              backgroundColor: colors['white-smoke'],
            }}></View>
          </View>


          {/* //// start here */}

          <ScrollView style={{
            marginTop: SPACING * 4,
            marginBottom: SPACING * 10,
          }}>
            {
              items && items.map((item) => (
                <OrderHistory key={item.id} item={item} />
              ))
            }
          </ScrollView>

        </View>

      </SafeAreaView>
    </View>
  )
}

export default Orders