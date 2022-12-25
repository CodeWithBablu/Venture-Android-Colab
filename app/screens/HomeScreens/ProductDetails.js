import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, StatusBar, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import Ionicons from 'react-native-vector-icons/Ionicons';


import SPACING from "../../config/SPACING";
import colors from "../../config/colors";
import { BlurView } from "expo-blur";
import { useStateValue } from "../../../context/Stateprovider";

var SharedPreferences = require('react-native-shared-preferences');

const { height, width } = Dimensions.get("window");

const sizes = ["S", "M", "L"];

const ProductDetails = ({ route, navigation }) => {

  const { cartItems, totalPrice, setTotalQty, setTotalPrice, setCartItems, onRemove, onAdd } = useStateValue();


  useEffect(() => {
    SharedPreferences.setName("Product");
    SharedPreferences.setItem("productName", product.name);
  }, [])

  const [activeSize, setActiveSize] = useState("S");


  if (route.params === undefined)
    return null;
  else {
    var { id, product } = route.params;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            style={{
              height: height / 2 + SPACING * 2,
              justifyContent: "space-between"
            }}
            source={product.image}
            imageStyle={{
              borderRadius: SPACING * 2,
            }}
          >

            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: SPACING * 2,
            }}>

              <TouchableOpacity style={{
                backgroundColor: colors.dark,
                padding: SPACING,
                borderRadius: SPACING * 1.5,
              }}>
                <Ionicons
                  name="arrow-back"
                  size={SPACING * 3}
                  color={colors.light}
                  onPress={() => navigation.navigate('HomeScreen')}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{
                backgroundColor: colors.dark,
                padding: SPACING,
                borderRadius: SPACING * 1.5,
              }}>
                <Ionicons
                  name="heart"
                  size={SPACING * 3}
                  color={colors.light}
                />
              </TouchableOpacity>

            </View>

            <View style={{
              borderRadius: SPACING * 2,
              overflow: "hidden",
            }}>
              <BlurView style={{
                padding: SPACING * 2,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
                tint="dark"
                intensity={90}
              >

                <View style={{
                  width: "60%",
                }}>
                  <Text style={{
                    color: colors.white,
                    fontSize: SPACING * 1.7,
                    fontWeight: "600",
                    marginBottom: SPACING,
                  }}>
                    {product.name}
                  </Text>
                  <Text style={{
                    color: colors["white-smoke"],
                    fontSize: SPACING * 1.4,
                    fontWeight: "500",
                    marginBottom: SPACING / 2,
                  }}>
                    {product.productCode}
                  </Text>
                  <View style={{
                    flexDirection: "row",
                    marginTop: SPACING,
                  }}>
                    <Ionicons
                      name="star"
                      size={SPACING * 1.5}
                      color={colors.primary}
                    />
                    <Text style={{
                      marginLeft: SPACING,
                      color: colors.white,
                    }}>
                      {product.rating}
                    </Text>
                  </View>
                </View>

                <View style={{
                  width: "35%",
                  justifyContent: "space-between"
                }}>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <TouchableOpacity style={{
                      padding: SPACING / 2,
                      width: SPACING * 5,
                      height: SPACING * 5,
                      borderRadius: SPACING,
                      backgroundColor: colors.dark,
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <Ionicons
                        name="cloud-circle-outline"
                        size={SPACING * 4}
                        color={colors.primary}
                        onPress={() => navigation.navigate('ArScreen', {
                          id: 1,
                          product: product,
                        })}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                      padding: SPACING / 2,
                      width: SPACING * 5,
                      height: SPACING * 5,
                      borderRadius: SPACING,
                      backgroundColor: colors.dark,
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <Ionicons
                        name="logo-web-component"
                        size={SPACING * 4}
                        color={colors.primary}
                        onPress={() => navigation.navigate('ArScreen', {
                          id: 1,
                          product: product,
                        })}
                      />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      backgroundColor: colors.dark,
                      padding: SPACING / 2,
                      borderRadius: SPACING / 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: colors["white-smoke"],
                        fontSize: SPACING * 1.3,
                      }}
                    >
                      Superior Quality
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>

          </ImageBackground>

          <View
            style={{
              padding: SPACING,
            }}
          >
            <Text
              style={{
                color: colors["white-smoke"],
                fontSize: SPACING * 1.7,
                marginBottom: 0,
              }}
            >
              Product Details
            </Text>
            <Text style={{ color: colors.white, fontSize: SPACING * 1.3 }}>
              {product.details}
            </Text>

            <View
              style={{
                marginVertical: SPACING * 2,
              }}
            >
              <Text
                style={{
                  color: colors["white-smoke"],
                  fontSize: SPACING * 1.7,
                  marginBottom: SPACING,
                }}
              >
                Size
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {sizes.map((size, index) => (
                  <TouchableOpacity style={[{
                    borderWidth: 2,
                    paddingVertical: SPACING / 2,
                    borderRadius: SPACING,
                    backgroundColor: colors["dark-light"],
                    width: width / 3 - SPACING * 2,
                    alignItems: "center",
                  },
                  activeSize == size && {
                    borderColor: colors.primary,
                    backgroundColor: colors.dark,
                  }
                  ]}
                    onPress={() => setActiveSize(size)}
                    key={index}
                  >
                    <Text
                      style={[
                        {
                          color: colors["white-smoke"],
                          fontSize: SPACING * 1.9,
                        },
                        activeSize === size && {
                          color: colors.primary,
                        },
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

            </View>

          </View>
        </SafeAreaView>
      </ScrollView>

      <View style={{
        flexDirection: "row",
        paddingTop: SPACING,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SPACING * 12,
      }}>

        <View
          style={{
            padding: SPACING,
            justifyContent: "center",
            paddingLeft: SPACING * 3,
          }}
        >
          <Text style={{ color: colors.icon, fontSize: SPACING * 1.5 }}>
            Price
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: colors.primary, fontSize: SPACING * 2 }}>
              $
            </Text>
            <Text
              style={{
                color: colors.white,
                fontSize: SPACING * 2,
                marginLeft: SPACING / 2,
              }}
            >
              {product.price}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginRight: SPACING,
            backgroundColor: colors.primary,
            width: width / 2 + SPACING * 2,
            height: SPACING * 6,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SPACING * 2,
          }}

          onPress={() => onAdd(product, 1)}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 2,
              fontWeight: "700",
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
