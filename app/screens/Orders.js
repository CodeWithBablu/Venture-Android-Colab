import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { FONTS } from '../config'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import OrderHistory from '../components/OrderHistory'

import cartProducts from '../config/cartProducts'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../slices/userSlices'
import OrderHistoryCard from '../components/orderHistoryCard'


// const API_URL = `http://192.168.0.105:5000`;
const API_URL = `http://192.168.137.221:5000`;



const Orders = () => {

  var User = useSelector(selectUserData);


  const [items, setItems] = useState(cartProducts);

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetchOrderHistoryData();

  }, [User])

  const fetchOrderHistoryData = async () => {

    const data = {
      cus_email: User.email,
    }

    const res = await fetch(`${API_URL}/get-order-history`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const orders = await res.json();

    setOrders(orders);

  }


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
          }}>history~</Text>
        </View>

        <View style={{
          flex: 1,
          alignItems: "center",
          marginTop: SPACING * 5,
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

          <ScrollView

            contentContainerStyle={{
              alignItems: "center",
            }}

            style={{
              marginTop: SPACING * 4,
              marginBottom: SPACING * 10,
              width: "100%",
            }}>
            {
              orders && (
                orders.map((order) => (
                  <OrderHistoryCard key={order._id} cartItems={order.items} createdAt={order.createdAt} />
                ))
              )
            }
          </ScrollView>

        </View>

      </SafeAreaView>
    </View>
  )
}

export default Orders