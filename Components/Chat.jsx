import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ArrowLight from '../assets/ArrowLight.png'
import ArrowDark from '../assets/ArrowDark.png'
import { useColorScheme } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Profile1 from '../assets/Profile1.png'
import Profile2 from '../assets/Profile2.png'
import Profile3 from '../assets/Profile3.png'

const Chat = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const navigation = useNavigation()

    const data = [
        {
            name: 'Louis Kelly',
            lastmessage: 'Your Order Just Arrived!',
            ProfileIcon: Profile1
        },
        {
            name: 'Paul Koch',
            lastmessage: 'Your Order Just Arrived!',
            ProfileIcon: Profile2
        },
        {
            name: 'Carla Klein',
            lastmessage: 'Your Order Just Arrived!',
            ProfileIcon: Profile3
        },
    ]

    return (
        <SafeAreaView>
            <ScrollView >
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ padding: 20, margin: 20, backgroundColor: '#FFF', borderRadius: 15, elevation: 4, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={isDarkMode ? ArrowDark : ArrowLight} />
                    </TouchableOpacity>
                    <View style={styles.ChatHeaderContainer}>
                        <View style={styles.HeaderContainer}>
                            <Text style={styles.headerTitle}>Chat</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            {
                                data.map((data, index) => (
                                    <View key={index} style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems: 'center', margin: 20, width: 350, padding: 15, backgroundColor: '#FFF', borderRadius: 30, marginBottom: 10 }}>
                                        <Image source={data.ProfileIcon} />
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: '700', color: isDarkMode ? '#FFF' : '#22242E' }}>{data.name}</Text>
                                            <Text style={{ fontSize: 14, fontWeight: '400', color: isDarkMode ? '#FFF' : '#22242E', opacity: 0.5 }}>{data.lastmessage}</Text>
                                        </View>
                                        <Text style={{ marginBottom: 30 }}>20:00</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chat

const styles = StyleSheet.create({
    ChatHeaderContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '700',
        color: '#22242E'
    },
})