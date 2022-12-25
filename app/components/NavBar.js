
import React from 'react'
import { View, Dimensions, Image, Text } from "react-native";
import SPACING from '../config/SPACING';
import colors from '../config/colors';
import { FONTS, SHADOWS } from '../config';


const { width } = Dimensions.get("window");

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Setting from '../screens/Setting';
import Orders from '../screens/Orders';

import HomeIcon from '../../assets/Navbar/HomeIcon';
import UserIcon from '../../assets/Navbar/UserIcon';
import SettingIcon from '../../assets/Navbar/SettingIcon';
import TagIcon from '../../assets/Navbar/TagIcon';
import ShoppingIcon from '../../assets/Navbar/ShoppingIcon';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../slices/userSlices';
import { useStateValue } from '../../context/Stateprovider';

const Tab = createBottomTabNavigator();

const NavBar = () => {

  const { cartItems, totalQty, totalPrice, setTotalQty, setTotalPrice, setCartItems, onRemove, onAdd } = useStateValue();

  const User = useSelector(selectUserData);

  return (

    <Tab.Navigator

      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: SPACING,
          left: SPACING * 2,
          right: SPACING * 2,
          backgroundColor: colors.dark,
          borderRadius: SPACING * 3,
          borderTopColor: colors.dark,
          height: SPACING * 8,
          ...SHADOWS.dark,
        }
      }}
    >
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            width: SPACING * 5,
            height: SPACING * 5,
            borderRadius: SPACING * 2,
            backgroundColor: focused ? colors.lightBlue : colors.dark,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <HomeIcon color={focused ? colors.dark : colors.icon} />
          </View>
        )
      }} />


      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            width: SPACING * 5,
            height: SPACING * 5,
            borderRadius: SPACING * 2,
            backgroundColor: focused ? colors.lightBlue : colors.dark,
            justifyContent: "center",
            alignItems: "center"
          }}>
            {
              User.picture != null ?
                <>
                  <Image
                    style={{
                      width: SPACING * 4.5,
                      height: SPACING * 4.5,
                      borderColor: colors.lightBlue,
                      borderWidth: 2,
                      borderRadius: SPACING * 4,
                    }}
                    source={{ uri: `${User.picture}` }}
                  />
                </> :
                <UserIcon color={focused ? colors.dark : colors.icon} />
            }
          </View>
        )
      }} />


      <Tab.Screen name='Setting' component={Setting} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            width: SPACING * 5,
            height: SPACING * 5,
            borderRadius: SPACING * 2,
            backgroundColor: focused ? colors.lightBlue : colors.dark,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <SettingIcon color={focused ? colors.dark : colors.icon} />
          </View>
        )
      }} />


      <Tab.Screen name='Order' component={Orders} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            width: SPACING * 5,
            height: SPACING * 5,
            borderRadius: SPACING * 2,
            backgroundColor: focused ? colors.lightBlue : colors.dark,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TagIcon color={focused ? colors.dark : colors.icon} />
          </View>
        )
      }} />


      <Tab.Screen name='Cart' component={Cart} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            width: SPACING * 5,
            height: SPACING * 5,
            borderRadius: SPACING * 2,
            backgroundColor: focused ? colors.lightBlue : colors.dark,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}>

            <ShoppingIcon color={focused ? colors.dark : colors.icon} />

            <View style={{
              position: "absolute",
              top: 5,
              right: 5,
              width: SPACING * 2.2,
              height: SPACING * 2.2,
              borderRadius: SPACING * 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.rose,
            }}>
              <Text style={{
                color: colors.dark,
                fontFamily: FONTS.bold,
              }}>{totalQty}</Text>
            </View>
          </View>
        )
      }} />


    </Tab.Navigator>

  )
}

export default NavBar;

/* <View style={{
      width: SPACING * 5.5,
      height: SPACING * 5.5,
      borderRadius: SPACING * 2,
      backgroundColor: colors.lightBlue,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Home color={colors.dark} />
    </View> */


// import { BlurView } from 'expo-blur';
// import { Ionicons } from '@expo/vector-icons';
// import { SvgUri } from 'react-native-svg';

// import React from 'react'
// import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
// import SPACING from '../config/SPACING';
// import colors from '../config/colors';

// const { width } = Dimensions.get("window");

// import Home from '../../assets/Navbar/Home';
// import User from '../../assets/Navbar/User';
// import Setting from '../../assets/Navbar/Setting';
// import Tag from '../../assets/Navbar/Tag';
// import Shopping from '../../assets/Navbar/Shopping';


// export const NavBar = () => {
//   return (
//     <View style={{
//       width: width,
//       height: SPACING * 10,
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: colors.dark,
//       elevation: 25,
//     }}>
//       <BlurView style={{
//         width: "90%",
//         height: "90%",
//         borderRadius: SPACING * 2,
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//       }}
//         tint="light"
//         intensity={12}
//       >
//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           backgroundColor: colors.lightBlue,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Home color={colors.dark} />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <User />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Setting />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Tag />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Shopping />
//         </View>

//       </BlurView>
//     </View>
//   )
// }
