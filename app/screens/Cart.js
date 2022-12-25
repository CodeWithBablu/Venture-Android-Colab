import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../config';

import cartProduct from "../config/cartProducts";
import colors from '../config/colors';
import SPACING from '../config/SPACING';

import ProductCard from '../components/ProductCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useStateValue } from '../../context/Stateprovider';


const Cart = () => {

  const { cartItems, totalPrice, setTotalQty, setTotalPrice, setCartItems, onRemove, onAdd } = useStateValue();

  function clearCart() {
    setCartItems([]);
    setTotalQty(0);
    setTotalPrice(0);
  }

  //Payment
  // const handleCheckout = async () => {
  //   const stripe = await getStripi();

  //   const stripeData = {
  //     user: userInfo,
  //     cartItems: cartItems,
  //   }

  //   const response = await fetch(`${URL}/stripe`, {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(stripeData),
  //   }
  //   );
  //   const data = await response.json();
  //   await stripe.redirectToCheckout({ sessionId: data.id });
  // }

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>
      <SafeAreaView style={{
        flex: 1,
        marginBottom: SPACING * 10,
        color: colors.dark,
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
          }}>{cartItems.length} Items
          </Text>

          <TouchableOpacity style={{
            flexDirection: "row",
            width: SPACING * 10,
            height: SPACING * 4.5,
            padding: SPACING / 2,
            borderRadius: SPACING * 1.5,
            backgroundColor: colors.light,
            justifyContent: "space-around",
            alignItems: "center",
          }}
            onPress={() => clearCart()}
          >
            <Ionicons style={{ color: colors.dark }} name='close-circle' size={SPACING * 3.5} />
            <Text style={{
              color: colors.white,
              fontFamily: FONTS.bold,
            }}>Clear</Text>

          </TouchableOpacity>

        </View>

        <ScrollView style={{ height: SPACING * 5, }}>
          {
            cartItems && cartItems.map((item) => (
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
            <Text style={styles.textStyle}>Rs. {totalPrice}</Text>
          </View>

          <View style={styles.viewBoxStyle}>
            <Text style={styles.textStyle}>Shipping Tax</Text>
            <Text style={styles.textStyle}>Rs. 20</Text>
          </View>

          <View style={styles.viewBoxBigStyle}>
            <Text style={styles.textBigStyle}>Total</Text>
            <Text style={styles.textBigStyle}>Rs. {totalPrice + 20}</Text>
          </View>

          <TouchableOpacity style={{
            flexDirection: "row",
            width: "80%",
            borderRadius: SPACING * 2,
            height: SPACING * 6,
            marginTop: SPACING * 2,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: colors.primary,
          }}>
            <Ionicons style={{ color: colors.dark }} name='pricetags' size={SPACING * 3.5} />

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
    color: colors.light,
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
    color: colors.lightBlue,
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