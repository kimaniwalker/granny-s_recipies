import React from 'react'
import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealsItem from '../components/mealsItem'
import Categories from '../data/categories.json'
import Meals from '../data/meals.json'

export default function MealsScreen({ route, navigation }) {

    const id = route.params.categoryId
    const mealsList = Meals.filter(item => item.category.includes(id))
    const categoryTitle = Categories.find((category) => category.id === id).name

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle
        })
    }, [id, route])

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={mealsList}
                    keyExtractor={(item) => item.id}
                    renderItem={(itemData) => (
                        <MealsItem {...itemData.item} navigation={navigation} />
                    )}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 100
    }
})