import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import { Ionicons } from '@expo/vector-icons';
import { FONTS } from '../config';
import { BlurView } from 'expo-blur';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../slices/userSlices';

import { useAuth0, Auth0Provider } from 'react-native-auth0';



const Setting = ({ navigation }) => {

  const dispatch = useDispatch();

  const { clearSession } = useAuth0();

  const LogOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await clearSession();
      const userInfo = {};
      dispatch(setUserData(userInfo));
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>
      <SafeAreaView style={{
        marginTop: StatusBar.currentHeight,
        marginBottom: SPACING * 10,
        backgroundColor: colors.dark,
      }}>

        <View style={{
          backgroundColor: colors.setting.back,
          alignItems: "center",
          borderTopLeftRadius: SPACING * 3,
          borderTopRightRadius: SPACING * 3,
        }}>

          <Text style={{
            marginTop: SPACING * 4,
            fontFamily: FONTS.bold,
            fontSize: SPACING * 2.2,
          }}>Settings</Text>

          <Text style={{
            width: "90%",
            textAlign: "center",
            marginTop: SPACING,
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 2,
            color: colors.setting.primary,
          }}>Hey! Tweak as you wish 😋️</Text>

          <ScrollView style={{
            width: "100%",
            borderTopLeftRadius: SPACING * 4,
            borderTopRightRadius: SPACING * 4,
            marginTop: SPACING * 10,
            backgroundColor: colors.dark,
          }}>

            <TouchableOpacity style={{ marginTop: SPACING * 10, alignItems: "center", }}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='md-locate'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Privacy</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.setting.red}
                  />
                </View>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginTop: SPACING * 3, alignItems: "center", }}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='chatbox-ellipses'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Contact</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.setting.red}
                  />
                </View>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginTop: SPACING * 3, alignItems: "center", }}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='md-book'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Terms of Service</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.setting.red}
                  />
                </View>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginTop: SPACING * 3, alignItems: "center", }} onPress={() => LogOut()}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='md-log-out'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Logout</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.setting.red}
                  />
                </View>

              </View>
            </TouchableOpacity>


          </ScrollView>

        </View>

      </SafeAreaView>
    </View>

  )
}

const styles = StyleSheet.create({
  viewBoxStyle: {
    width: "90%",
    borderRadius: SPACING * 2,
    height: SPACING * 6.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.setting.primary,
  },
  viewIonStyle: {
    alignItems: "center",
    justifyContent: "center"
  },
  saveViewIon: {

  },
  IonStyle: {
    textAlignVertical: "center", textAlign: "center", width: SPACING * 6, height: SPACING * 5.5, backgroundColor: colors.setting.red, borderRadius: SPACING * 1.5, marginLeft: SPACING / 2,
  },
  arrowIonStyle: {
    textAlignVertical: "center", textAlign: "center", width: SPACING * 6.5, height: SPACING * 6.5, backgroundColor: colors.setting.dark, borderTopRightRadius: SPACING * 2, borderBottomRightRadius: SPACING * 2,
  },
  textStyle: {
    width: SPACING * 20,
    color: colors.dark,
    fontFamily: FONTS.bold,
    fontSize: SPACING * 1.5,
  }
});

export default Setting