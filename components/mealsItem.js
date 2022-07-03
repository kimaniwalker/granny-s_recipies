import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import Mealtagitem from './mealtagitem'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFavoritesContext } from '../context/favorites';

export default function MealsItem({ id, title, affordability, imageUrl, duration, complexity, isGlutenFree, isVegan, isVegetarian, isLactoseFree, navigation }) {

    const { favorites, checkIfFavorited, addItem, removeItem } = useFavoritesContext()

    const isFavorited = checkIfFavorited(id)


    function handlePress() {
        navigation.navigate('Meal Details', {
            id: id
        })
    }

    function handleUpdateFav() {

        if (isFavorited) {
            removeItem(id)

            console.log('removing')
            console.log('CurrentFavoritews', favorites)


        } else {
            addItem(id)
        }

        console.log(favorites)
    }


    return (
        <>
            <View style={styles.cardWrapper}>

                <View style={styles.cardContainer}>
                    <Pressable
                        android_ripple={{ color: '#fff' }}
                        style={({ pressed }) => (pressed ? styles.buttonPressed : null
                        )}
                        onPress={handlePress}
                    >

                        <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.details}>{complexity.toUpperCase()} - {affordability.toUpperCase()} - {duration} min</Text>
                            </View>

                        </ImageBackground>

                        <View style={styles.heartIcon}>
                            <Pressable
                                android_ripple={{ color: '#fff' }}
                                style={({ pressed }) => (pressed ? styles.iconPressed : null
                                )}
                                onPress={handleUpdateFav}
                            >

                                {isFavorited ? (
                                    <FontAwesome style={styles.heartIcon} name="heart" size={32} color="red" />
                                ) : (
                                    <FontAwesome5 style={styles.heartIcon} name="heart" size={32} color="white" />
                                )}
                            </Pressable>
                        </View>

                    </Pressable>

                </View>
                <View style={styles.descriptionRow}>
                    {isVegan && (
                        <Mealtagitem description='Vegan Friendly' icon={require("../assets/vegan.png")} />
                    )}
                    {isVegetarian && (
                        <Mealtagitem description="Vegiterian Friendly" icon={require("../assets/vegitarian.png")} />
                    )}
                    {isGlutenFree && (
                        <Mealtagitem description="Gluten Free" icon={require("../assets/gluten-free.png")} />
                    )}

                    {isLactoseFree && (
                        <Mealtagitem description="Lactose Free" icon={require("../assets/lactose-free.png")} />
                    )}
                </View>
            </View >

        </>
    )
}


const styles = StyleSheet.create({

    cardWrapper: {
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'lightgray',
        elevation: 4,
        shadowColor: 'lightgray',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 9,
        shadowOpacity: 1,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        marginVertical: 16,

    },

    cardContainer: {
        flex: 1,
        height: 250,
        width: '100%',
        elevation: 4,
        shadowColor: 'lightgray',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 9,
        shadowOpacity: 1,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'black'


    },
    title: {
        fontFamily: 'montserratBold',
        fontSize: 24,
        textAlign: 'center',
        margin: 8,
        color: 'white'
    },
    details: {
        fontSize: 12,
        color: 'white'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        opacity: .85,
        position: 'relative'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,

    },
    descriptionRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 16,
        padding: 8
    },
    buttonPressed: {
        opacity: 0.45
    },
    iconPressed: {
        color: 'red'
    },
    heartIcon: {
        position: 'absolute',
        right: 5,
        top: 5
    }

})
