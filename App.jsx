import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './Components/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from './assets/home.png'
import ProfileIcon from './assets/Profile.png'
import BuyIcon from './assets/Buy.png'
import ChatIcon from './assets/Chat.png'
import Profile from './Components/Profile';
import OrderScreen from './Components/OrderScreen';
import Chat from './Components/Chat';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 74,
            ...styles.shadow
          },
        }}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={HomeIcon}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#6B50F6': '#B3A9FF'
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: focused ? '#6B50F6' :'#B3A9FF'
                    }}
                  >HOME</Text>
                </View>
              )
            }
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={ProfileIcon}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#6B50F6': '#B3A9FF'
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: focused ? '#6B50F6' :'#B3A9FF'
                    }}
                  >Profile</Text>
                </View>
              )
            }
          }} />
        <Tab.Screen name="Buy" component={BuyScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={BuyIcon}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#6B50F6': '#B3A9FF'
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: focused ? '#6B50F6' :'#B3A9FF'
                    }}
                  >Buy</Text>
                </View>
              )
            }
          }} />
        <Tab.Screen name="Chat" component={ChatScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={ChatIcon}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#6B50F6': '#B3A9FF'
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: focused ? '#6B50F6' :'#B3A9FF'
                    }}
                  >Chat</Text>
                </View>
              )
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})


const ProfileScreen = () => {
  return (
      <View>
        <Profile title="Profile" subtitle="" />
      </View>
  )
}
const BuyScreen = () => {
  return (
    <View>
      <OrderScreen/>
    </View>
  )
}
const ChatScreen = () => {
  return (
    <View>
      <Chat/>
    </View>
  )
}