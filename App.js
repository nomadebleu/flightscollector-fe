import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Icones
<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//Composants
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Reduction from './screens/Reductions';
import Login from './screens/Login';
import Scan from './screens/Scan';
import Profil from './screens/Profil';
import MyPlane from './screens/MyPlane';
=======
import FontAwesome from "react-native-vector-icons/FontAwesome";
//Screens
import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import ReductionScreen from "./screens/ReductionsScreen";
import LoginScreen from "./screens/LoginScreen";
import ScanScreen from "./screens/ScanScreen";
import PassScreen from "./screens/PassScreen";
import ProfilScreen from "./screens/ProfilScreen";
import MyPlaneScreen from "./screens/MyPlaneScreen";
>>>>>>> f8d5d12e9957e7d5ae352d16d3c837ce35a67f27
//Fonts
import { useFonts } from "expo-font";
//Redux
import { Provider, useSelector } from "react-redux";
import user from "./reducers/user";

//Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Redux & Redux Persist
const reducers = combineReducers({ user });
const persistConfig = { key: "flightCollector", storage: AsyncStorage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

//Définition des navigations (Nested)
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Tab Navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          //On rajoute focused pour changer le style de la view qui encadre l'icone
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profil") {
            iconName = "user";
          } else if (route.name === "Gallery") {
            iconName = "image";
          } else if (route.name === "Reduction") {
            iconName = "tag";
          }
          //Const de style pour mettre une condition
          const iconContainerStyle = focused
            ? styles.activeIconContainer
            : null;
          return (
            <View style={styles.tab}>
              <View style={[styles.iconContainer, iconContainerStyle]}>
                <FontAwesome name={iconName} size={size} color={color} />
              </View>

              <Text style={styles.label}>{route.name}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarShowLabel: false,
        headerShown: false, // Enleve les libellés par default de l'icone
        tabBarStyle: {
          // Styles de la barre tab
          height: 100,
        },
      })}
    >
<<<<<<< HEAD
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Profil'
        component={Profil}
      />
      <Tab.Screen
        name='Gallery'
        component={Gallery}
      />
      <Tab.Screen
        name='Reduction'
        component={Reduction}
      />
=======
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="Reduction" component={ReductionScreen} />
>>>>>>> f8d5d12e9957e7d5ae352d16d3c837ce35a67f27
    </Tab.Navigator>
  );
};

export default function App() {
<<<<<<< HEAD
=======
  console.log("process.env:", process.env.EXPO_PUBLIC_API_URL);

>>>>>>> f8d5d12e9957e7d5ae352d16d3c837ce35a67f27
  //Chargement de la font dans le composant racine
  let [fontsLoaded] = useFonts({
    "DancingScript-Regular": require("./assets/fonts/DancingScript-Regular.ttf"),
    "Farsan-Regular": require("./assets/fonts/Farsan-Regular.ttf"),
    "Cabin-Bold": require("./assets/fonts/Cabin-Bold.ttf"),
    "Cabin-Regular": require("./assets/fonts/Cabin-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ gestureEnabled: false }} //Bloque le slide arrière
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ gestureEnabled: true }}
            />
            <Stack.Screen name="Scan" component={ScanScreen} />
            <Stack.Screen name="Pass" component={PassScreen} />
            <Stack.Screen name="MyPlane" component={MyPlaneScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",

    borderTopLeftRadius: 5,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 5,

    marginTop: 25,

    backgroundColor: "#002C82",
  },
  // Style lors du focused
  activeIconContainer: {
    backgroundColor: "#06D6A0",
    borderWidth: 1,
    borderColor: "#002C82",
  },
  tab: {
    alignItems: "center",
  },

  label: {
    color: "#002C82",
    fontSize: 10,
    fontFamily: "Cabin-Regular",
  },
});
