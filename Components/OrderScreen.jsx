import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import patten from '../assets/Pattern.png'
import patten_2 from '../assets/DarkPattern.png'
import { useColorScheme } from 'react-native'
import ArrowLight from '../assets/ArrowLight.png'
import ArrowDark from '../assets/ArrowDark.png'
import DishImg from '../assets/Photo_Menu.png'
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const navigation = useNavigation()

    const data = [
        {
            dishName: 'Dragon Fire Pasta',
            HotelName: 'Italian Delight',
            price: '$14'
        },
        {
            dishName: 'Galactic Burger',
            HotelName: 'Burger King',
            price: '$7'
        },
        {
            dishName: 'Samurai Sushi Roll',
            HotelName: 'Sushi Palace',
            price: '$20'
        },
        {
            dishName: 'Supernova Pizza',
            HotelName: 'Pizza Hut',
            price: '$18'
        }
    ];
    const [counts, setCounts] = useState(data.map(() => 1));
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground source={isDarkMode ? patten_2 : patten} style={isDarkMode ? styles.darkMode : ''} resizeMode="cover">
                    <View>
                        <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={{ padding: 20, margin: 20, backgroundColor: '#FFF', borderRadius: 15, elevation: 4, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={isDarkMode ? ArrowDark : ArrowLight} />
                        </TouchableOpacity>
                        <View style={{ margin: 20, alignItems: 'center' }}>
                            {data.map((item, index) => (
                                <View key={index} style={[styles.Card_container, index == 3 ? { marginBottom: 100 } : '']}>
                                    <View style={styles.ImgContainer}>
                                        <Image source={DishImg} />
                                        <View>
                                            <Text style={styles.heading}>{item.dishName}</Text>
                                            <Text style={styles.subtitle}>{item.HotelName}</Text>
                                            <Text style={styles.price}>{item.price}</Text>
                                        </View>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <TouchableOpacity style={{ padding: 10, borderRadius: 10, width: 35, backgroundColor: isDarkMode ? '#4023D7' : '#6B50F6' }}
                                            onPress={() => {
                                                if (counts[index] > 0) {
                                                    const updatedCounts = [...counts];
                                                    updatedCounts[index]--;
                                                    setCounts(updatedCounts);
                                                }
                                            }}>
                                            <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>-</Text>
                                        </TouchableOpacity>
                                        <Text>{counts[index]}</Text>
                                        <TouchableOpacity style={{ padding: 10, borderRadius: 10, width: 35, backgroundColor: isDarkMode ? '#4023D7' : '#6B50F6' }}
                                            onPress={() => {
                                                const updatedCounts = [...counts];
                                                updatedCounts[index]++;
                                                setCounts(updatedCounts);
                                            }}>
                                            <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: '#000'
    },
    Card_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 30,
    },
    ImgContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    heading: {
        fontSize: 15,
        fontWeight: '600',
        color: '#22242E'
    },
    subtitle: {
        fontSize: 14,
        opacity: 0.5
    },
    price: {
        fontSize: 22,
        fontWeight: '900',
        color: '#6B50F6'
    },
})