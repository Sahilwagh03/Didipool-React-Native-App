import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
// import Search from '../assets/Search.png'
import Filter from '../assets/Filter.png'

const SearchSection = () => {
    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.inputContainer}>
                    {/* <Image 
                        style={styles.Icon}
                        source={Search}
                    /> */}
                    <TextInput
                        style={styles.search}
                        placeholder="What do you want to order?"
                    />
                </View>
                <View style={styles.FilterContainer}>
                    <Image
                     style={styles.FilterIcon}
                     source={Filter}
                    />
                </View>
            </View>
        </View>
    )
}

export default SearchSection

const styles = StyleSheet.create({
    Container: {
        marginVertical: 18,
        marginHorizontal: 20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    // Icon:{
    //     height:24,
    //     position:'absolute',
    //     zIndex:9,
    //     left:10,
    // },
    inputContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    search: {
        height: 60,
        width: 267,
        backgroundColor: '#EDE9FF',
        borderRadius:15,
        // textAlign:'center',
        paddingLeft:10,
        color:'#6B50F6',
    },
    FilterContainer:{
        padding:20,
        backgroundColor:'#EDE9FF',
        borderRadius:15,
    },
})