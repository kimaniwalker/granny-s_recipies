import React from 'react'
import { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import MealDetails from '../components/mealDetails'
import MealsItem from '../components/mealsItem'
import Meals from '../data/meals.json'

export default function MealDetailsScreen({ navigation, route }) {

    const id = route.params.id
    const mealDetails = Meals.find(item => item.id === id)



    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealDetails.title
        })
    }, [id, route])

    return (
        <>
            <MealDetails {...mealDetails} />
        </>
    )
}
