import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Food from '../assets/food.png'
import { useColorScheme } from 'react-native'

const Banner = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View >
            <View  style={styles.MainContainer}>
                <View  style={styles.headingContainer}>
                    <View>
                        <Text style={styles.headingText}>Special Deal For</Text>
                        <Text style={styles.headingText}>October</Text>
                    </View>
                    <View>
                        <TouchableOpacity><Text style={styles.btn}>Buy Now</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                    style={styles.iceImg}
                    source={Food}
                    ></Image>
                </View>
            </View>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    MainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:30,
        backgroundColor:'#6B50F6',
        borderRadius:20,
        margin:10,
    },
    headingText:{
        fontSize:30,
        fontWeight:'900',
        color:'#fff'
    },
    btn:{
        backgroundColor:'#fff',
        width:100,
        textAlign:'center',
        borderRadius:5,
        padding:10,
        color:'#6B50F6',
        fontWeight:'900'
    },
    headingContainer:{
        display:'flex',
        gap:30
    },
    imgContainer:{
        width:100,
        height:100
    },
    iceImg:{
        width:100,
        height:100
    }
})