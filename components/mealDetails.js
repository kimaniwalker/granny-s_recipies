import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import Mealtagitem from './mealtagitem'

export default function MealDetails({ id, title, affordability, imageUrl, duration, complexity, isGlutenFree, isVegan, isVegetarian, isLactoseFree, navigation, ingredients, steps }) {


    return (
        <>
            <ScrollView style={{ marginTop: 100 }}>

                <View style={styles.contentContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.details}>{complexity.toUpperCase()} - {affordability.toUpperCase()} - {duration} min</Text>
                </View>
                <View style={styles.contentContainer}>

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
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.subHeading}>Ingredients</Text>
                    {ingredients.map((item) => (
                        <View key={item} style={styles.ingredients}>
                            <Text>{item}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.subHeading}>Steps</Text>
                    {steps.map((item) => (
                        <View key={item} style={styles.steps}>

                            <Text>{item}</Text>

                        </View>

                    ))}
                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontFamily: 'montserratBold',
        fontSize: 32,
        textAlign: 'center',
        marginVertical: 8
    },
    subHeading: {
        fontFamily: 'montserratBold',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 16,

    },
    details: {
        fontSize: 12,
        color: 'red'
    },
    ingredients: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        margin: 8,
        width: '100%'
    },
    steps: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 16,
        margin: 8
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center'

    },
    descriptionRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        padding: 8,
    },
})
