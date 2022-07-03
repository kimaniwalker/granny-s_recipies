import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Mealtagitem({ description, icon }) {


    return (
        <>
            <View style={styles.container}>
                <View style={styles.Iconrow}>
                    <Image source={icon} style={styles.icon} />
                </View>
                <View style={styles.Titlerow}>
                    <Text style={styles.tagText}>{description.toUpperCase()}</Text>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        width: 100,
        borderRadius: 48,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height: 32,
        marginVertical: 8
    },
    tagText: {
        textAlign: 'center',
        fontSize: 12
    },
    Iconrow: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Titlerow: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'center',

    }
})
