import { SafeAreaView, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import SearchSection from './SearchSection'
import Banner from './Banner'
import patten from '../assets/Pattern.png'
import patten_2 from '../assets/DarkPattern.png'
import RestaurantList from './RestaurantList'
import PopularItems from './PopularItems'
import { useColorScheme } from 'react-native'

const Home = () => {

    const isDarkMode = useColorScheme() === 'dark'

    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <ImageBackground source={isDarkMode ? patten_2 : patten} style={isDarkMode ? styles.darkMode : ''} resizeMode="cover">
                        <Header />
                        <SearchSection />
                        <Banner />
                        <RestaurantList />
                        <PopularItems />
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: '#000'
    }
})