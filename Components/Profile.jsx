import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView ,ImageBackground} from 'react-native'
import React from 'react'
import Bell from '../assets/Bell.png'
import { useColorScheme } from 'react-native'
import Voucher from '../assets/voucher.png'
import DishImg from '../assets/Photo_Menu.png'
import patten from '../assets/Pattern.png'
import patten_2 from '../assets/DarkPattern.png'

const Profile = ({ title, subtitle }) => {
    const isDarkMode = useColorScheme() === 'dark'

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
    return (
        <SafeAreaView>
            <ScrollView >
                <ImageBackground source={isDarkMode ? patten_2 : patten} style={isDarkMode ? styles.darkMode : ''} resizeMode="cover">
                    <View>
                        <View style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50, elevation: 3, backgroundColor: isDarkMode ? '#2A2C38' : '#FFF' }}>
                            <View style={styles.Container}>
                                <View style={styles.headingContainer}>
                                    <Text style={[styles.whiteText, styles.headingText]}>{title}</Text>
                                    {subtitle == "" ? "" : <Text style={[isDarkMode ? styles.darkText : styles.whiteText, styles.headingText]}>{subtitle}</Text>}
                                </View>
                                <View style={styles.imgContainer}>
                                    <Image
                                        style={styles.bellImg}
                                        source={Bell}
                                    />
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{ top: -60, width: 150, height: 150 }}
                                    source={require('../assets/ProfilePic.png')}
                                />
                                <View style={{ top: -50, alignItems: 'center', display: 'flex', flexDirection: 'row', gap: 70 }}>
                                    <View>
                                        <Text style={[isDarkMode ? styles.whiteText : styles.darkText, styles.Name]}>Sahil Wagh</Text>
                                        <Text style={{ fontSize: 18, fontWeight: '600', color: isDarkMode ? '#FFF' : '#000', opacity: 0.3 }}>Sahil142@</Text>
                                    </View>
                                    <View style={{ padding: 20, backgroundColor: isDarkMode ? '#000' : '#BCFFD7', borderRadius: 50, width: 111 }}>
                                        <Text style={{ color: "#6B50F6", fontSize: 14, fontWeight: '700', textAlign: 'center' }}>Member</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: isDarkMode ? '#2A2C38' : '#FFF', padding: 20, margin: 20, borderRadius: 30, display: 'flex', paddingLeft: 30, flexDirection: 'row', gap: 40 }}>
                            <View>
                                <Image source={Voucher} />
                            </View>
                            <View>
                                <Text style={{ color: isDarkMode ? '#FFF' : '#000', fontSize: 18, fontWeight: '700' }}>You Have 3 Voucher</Text>
                            </View>
                        </View>
                        <View style={styles.PopularContainer}>
                            <View>
                                <View style={styles.HeaderContainer}>
                                    <Text style={styles.headerTitle}>Favourite</Text>
                                </View>
                                <View>
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
                                            <View>
                                                <TouchableOpacity style={{ padding: 15, borderRadius: 20, backgroundColor: isDarkMode ? '#4023D7' : '#6B50F6' }}>
                                                    <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>Buy Now</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#6B50F6',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingBottom: 30
    },
    headingContainer: {

    },
    headingText: {
        fontSize: 34,
        fontWeight: '800',
    },
    bellImg: {
        height: 23,
    },
    imgContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffff',
        borderRadius: 20,
        elevation: 5
    },
    darkText: {
        color: '#000'
    },
    whiteText: {
        color: '#FFF'
    },
    Name: {
        fontSize: 34,
        fontWeight: '900'
    },
    PopularContainer: {
        margin: 20
    },
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#22242E'
    },
    headerBtn: {
        color: '#6B50F6'
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
        marginBottom: 10
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
    darkMode:{
        backgroundColor:'#000'
    }
})