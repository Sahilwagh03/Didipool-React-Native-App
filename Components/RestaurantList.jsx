import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Resturant_1 from '../assets/Resturant_1.png'
import Resturant_2 from '../assets/Restaurant_2.png'
import Resturant_3 from '../assets/Restaurant_3.png'
import { useColorScheme } from 'react-native'

const RestaurantList = () => {

    const isDarkMode = useColorScheme() === 'dark'

    const Data = [
        {
            Title: "Vegan Resto",
            subTitle: "12 Mins",
            ImgLink: Resturant_1
        },
        {
            Title: "Healthy Food",
            subTitle: "8 Mins",
            ImgLink: Resturant_2
        },
        {
            Title: "Good Food",
            subTitle: "12 Mins",
            ImgLink: Resturant_3
        }
    ]

    return (
        <View style={styles.RestaurantContainer}>
            <View>
                <View style={styles.HeaderContainer}>
                    <Text style={styles.headerTitle}>Nearest Restaurant</Text>
                    <Text style={styles.headerBtn}>View More</Text>
                </View>
                <View>
                    <ScrollView horizontal={true}>
                        {
                            Data.map((data, index) =>
                                <View key={index}>
                                    <View style={styles.Card_Container}>
                                        <View>
                                            <Image
                                                source={data.ImgLink}
                                            ></Image>
                                        </View>
                                        <View>
                                            <Text style={[isDarkMode ? {color:'#FFF'}:{color:'#000'},styles.HeaderTitle]}>{data.Title}</Text>
                                            <Text style={[isDarkMode ? {color:'#FFF', opacity:0.3}:{color:'#000',  opacity:0.3},styles.subTitle]}>{data.subTitle}</Text>
                                        </View>
                                    </View>
                                </View>
                            )

                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default RestaurantList

const styles = StyleSheet.create({
    RestaurantContainer: {
        margin: 20
    },
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#22242E'
    },
    headerBtn: {
        color: '#6B50F6'
    },
    Card_Container: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFF',
        padding: 25,
        borderRadius: 20,
        height:184,
        width:145,
        margin:10,
        marginTop:30,
        elevation:2
    },
    HeaderTitle: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: 'center',
        marginBottom: 5
    },
    subTitle: {
        fontSize: 14,
        textAlign: 'center'
    },
})