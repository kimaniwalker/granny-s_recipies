import React from 'react'
import { FlatList, View, StyleSheet, Text, SafeAreaView } from 'react-native'
import MealsItem from '../components/mealsItem'
import { useFavoritesContext } from '../context/favorites'
import Meals from '../data/meals.json'




export default function FavoritesScreen({ navigation, route }) {

    const { favorites } = useFavoritesContext()
    const FavoriteMeals = Meals.filter((meal) => favorites.includes(meal.id))



    return (
        <>
            <View style={styles.wrapper}>
                <SafeAreaView>
                    {FavoriteMeals.length === 0 && (

                        <Text>You do not have any favorites yet</Text>

                    )}

                    <FlatList
                        data={FavoriteMeals}
                        keyExtractor={(item) => item.id}
                        renderItem={(itemData) => (
                            <MealsItem {...itemData.item} navigation={navigation} />
                        )}
                    />
                </SafeAreaView>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16
    }
})


