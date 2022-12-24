import { BlurView } from 'expo-blur';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions, TextInput } from "react-native";
import colors from '../config/colors';
import SPACING from '../config/SPACING';
import { FONTS, SHADOWS } from '../config/index';

import { Ionicons } from '@expo/vector-icons';
import { selectUserData } from '../../slices/userSlices';
import { useSelector } from 'react-redux';

const avatar = require('../../assets/avatar.jpg');

const Profile = () => {

  const User = useSelector(selectUserData);

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
      padding: SPACING,
    }}>
      <SafeAreaView style={{
        marginTop: StatusBar.currentHeight,
        marginBottom: SPACING * 10,
        backgroundColor: colors.dark,
      }}>

        <ScrollView>

          <View style={{
            alignItems: "center",
            backgroundColor: colors.profile.back,
            borderRadius: SPACING * 3.8,
          }}>


            <View style={{
              flexDirection: "row",
              justifyContent: "space-around",
              padding: SPACING,
            }}>
              <Image style={{
                width: "30%",
                height: SPACING * 18,
                borderRadius: SPACING * 3,
              }}
                resizeMode="contain"
                source={User.picture === undefined ? avatar : { uri: `${User.picture}` }}
              />

              <View style={{
                width: "70%",
                borderRadius: SPACING * 3,
                justifyContent: "space-around",
                padding: SPACING,
              }}
              >

                <Text style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SPACING * 2.2,
                }}>{User.name === undefined ? "Oops !! Not signed in yet 😭️" : "Hi there! Nice to see you 😊️"}</Text>


                <Text style={{
                  fontWeight: '700',
                  fontSize: SPACING * 2,
                }}>{User.name === undefined ? "What we call you ..." : User.name}</Text>

              </View>

            </View>


          </View >

          <View style={{
            alignItems: "center",
            marginTop: SPACING * 4,
            marginBottom: SPACING * 4,
          }}>

            <View style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Name</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text
                  numberOfLines={1}
                  style={styles.textStyle}
                >{User.name === undefined ? "What we call you ..." : User.name}</Text>
              </ScrollView>

            </View>

            <View style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Email</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text
                  numberOfLines={1}
                  style={styles.textStyle}
                >{User.email === undefined ? "your email ..." : User.email}</Text>
              </ScrollView>

            </View>




            <TouchableOpacity style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Address</Text>

              <TextInput
                style={styles.textinputStyle}
                onChangeTex={null}
                value={null}
                placeholder="where did you live..."
                placeholderTextColor={colors.profile.text}
                keyboardType="default"
              />

              <View style={styles.saveBtnStyle}>
                <Ionicons name='checkmark-done' size={SPACING * 5} />
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Contact</Text>

              <TextInput
                style={styles.textinputStyle}
                onChangeTex={null}
                value={null}
                placeholder="Phone no..."
                placeholderTextColor={colors.profile.text}
                keyboardType="number-pad"
              />

              <View style={styles.saveBtnStyle}>
                <Ionicons name='checkmark-done' size={SPACING * 5} />
              </View>

            </TouchableOpacity>



          </View>

        </ScrollView>

      </SafeAreaView >
    </View >
  )
}

const styles = StyleSheet.create({
  saveViewBoxStyle: {
    width: "95%",
    marginTop: SPACING * 3,
    height: SPACING * 6.2,
    borderRadius: SPACING * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.profile.secondary,
  },
  labelStyle: {
    position: "absolute",
    top: -SPACING + 12,
    left: SPACING * 1.5,
    fontSize: SPACING * 1.6,
    fontFamily: FONTS.semiBold,
    color: colors.profile.primary,
  },
  saveBtnStyle: {
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.profile.primary,
    borderTopRightRadius: SPACING * 2,
    borderBottomRightRadius: SPACING * 2,
  },
  textinputStyle: {
    width: "80%",
    marginTop: SPACING * 1.5,
    fontSize: SPACING * 1.6,
    fontFamily: FONTS.bold,
    color: colors.profile.text,
    paddingLeft: SPACING * 2.5,
    paddingRight: SPACING,
  },
  textStyle: {
    marginTop: SPACING * 2.5,
    fontSize: SPACING * 1.6,
    fontFamily: FONTS.bold,
    color: colors.profile.text,
    paddingLeft: SPACING * 2.5,
    overflow: "scroll",
    paddingRight: SPACING,
  }
})

export default Profile;