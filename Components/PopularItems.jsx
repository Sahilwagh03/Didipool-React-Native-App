import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DishImg from '../assets/Photo_Menu.png'

const PopularItems = () => {
    return (
        <View style={styles.PopularContainer}>
            <View>
                <View style={styles.HeaderContainer}>
                    <Text style={styles.headerTitle}>Popular Menu</Text>
                    <Text style={styles.headerBtn}>View More</Text>
                </View>
                <View>
                    <ScrollView horizontal={true}>
                        <View style={styles.Card_container}>
                            <View style={styles.ImgContainer}>
                                <Image source={DishImg}></Image>
                                <View>
                                    <Text style={styles.heading}>Green Noddle</Text>
                                    <Text style={styles.subtitle}>Noodle Home</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.price}>$15</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default PopularItems

const styles = StyleSheet.create({
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
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    ImgContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20
    },
    heading:{
        fontSize:15,
        fontWeight:'600',
        color:'#22242E'
    },
    subtitle:{
        fontSize:14,
        opacity:0.3
    },
    price:{
        fontSize:22,
        fontWeight:'900',
        color:'#6B50F6'   
    }
})