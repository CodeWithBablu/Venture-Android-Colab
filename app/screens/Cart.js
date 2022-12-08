import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../config';

import cartProduct from "../config/cartProducts";
import colors from '../config/colors';
import SPACING from '../config/SPACING';

import ProductCard from '../components/ProductCard';
import { Ionicons } from '@expo/vector-icons';

const Cart = () => {

  const [items, setItems] = useState(cartProduct);
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>
      <SafeAreaView style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        marginBottom: SPACING * 10,
      }}>

        <View style={{
          flexDirection: "row",
          padding: SPACING * 2,
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 2.2,
            color: colors.white
          }}>My Cart</Text>

          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 1.5,
            color: colors['white-smoke']
          }}>4 Items
          </Text>
        </View>

        <ScrollView style={{ height: SPACING * 5, }}>
          {
            items && items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          }
        </ScrollView>

        <View style={{
          alignItems: "center",
          padding: SPACING * 2,
        }}>

          <View style={styles.viewBoxStyle}>
            <Text style={styles.textStyle}>Sub Total</Text>
            <Text style={styles.textStyle}>Rs. 500</Text>
          </View>

          <View style={styles.viewBoxStyle}>
            <Text style={styles.textStyle}>Shipping Tax</Text>
            <Text style={styles.textStyle}>Rs. 500</Text>
          </View>

          <View style={styles.viewBoxBigStyle}>
            <Text style={styles.textBigStyle}>Total</Text>
            <Text style={styles.textBigStyle}>Rs. 520</Text>
          </View>

          <TouchableOpacity style={{
            flexDirection: "row",
            width: "80%",
            borderRadius: SPACING * 2,
            height: SPACING * 7,
            marginTop: SPACING * 2,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: colors.primary,
          }}>
            <Ionicons style={{ color: colors.dark }} name='pricetags' size={SPACING * 4} />

            <Text style={{
              fontFamily: FONTS.bold,
              color: colors.white,
              fontSize: SPACING * 2.5,
            }}>Checkout</Text>
          </TouchableOpacity>


        </View>

      </SafeAreaView>
    </View>
  )
}

export default Cart;


const styles = StyleSheet.create({
  textStyle: {
    fontFamily: FONTS.regular,
    fontSize: SPACING * 1.5,
    color: colors.secondary,
  },
  viewBoxStyle: {
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textBigStyle: {
    marginTop: SPACING * 2,
    fontFamily: FONTS.bold,
    fontSize: SPACING * 2,
    color: colors.rose,
  },
  viewBoxBigStyle: {
    borderWidth: 2.5,
    marginTop: SPACING,
    width: "100%",
    borderStyle: 'dashed',
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: colors.cart.buttonsec,
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between"
  },
}); 