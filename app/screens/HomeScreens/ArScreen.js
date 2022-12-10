import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import colors from '../../config/colors'

import { NativeModules } from 'react-native';


function ArScreen({ route, navigation }) {

  if (route.params === undefined)
    return null;
  else {
    var { id, product } = route.params;
  }

  const goBack = () =>
    navigation.navigate('ProductDetails', {
      id: 1,
      product: product,
    });


  return (
    NativeModules.NativeUI.navigateToExample() ?
      <>{NativeModules.NativeUI.navigateToExample()}</>

      :

      goBack()
    // <>
    //   <View style={{
    //     flex: 1,
    //     backgroundColor: colors.dark,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}>
    //     <Text>Hello World</Text>
    //   </View>
    // </>
  )
}

export default ArScreen;