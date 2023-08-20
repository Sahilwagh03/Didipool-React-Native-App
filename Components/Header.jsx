import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bell from '../assets/Bell.png'
import { useColorScheme } from 'react-native'

const Header = () => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.headingContainer}>
                    <Text style={[isDarkMode? styles.darkText : styles.whiteText , styles.headingText]}>Find Your</Text>
                    <Text style={[isDarkMode? styles.darkText : styles.whiteText ,styles.headingText]}>Favorite Food</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.bellImg}
                        source={Bell}
                    />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingContainer: {

    },
    headingText: {
        fontSize: 34,
        fontWeight: '800',
        color: '#000'
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
    darkText:{
        color:'#000'
    },
    whiteText:{
        color:'#FFF'
    }
})