import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import CategoryItem from '../components/categoryItem'
import Categories from '../data/categories.json'

export default function CategoryScreen({ navigation }) {

    function pressHandler(itemData) {
        navigation.navigate('Meals Screen', {
            categoryId: itemData.item.id
        })
    }



    return (
        <>

            <View style={styles.container}>
                <FlatList data={Categories}
                    keyExtractor={(item) => item.id}
                    renderItem={(itemData) => (
                        <CategoryItem
                            title={itemData.item.name}
                            color={itemData.item.categoryColor}
                            onPress={() => pressHandler(itemData)}
                        />
                    )}
                    numColumns={2}

                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    }

})
