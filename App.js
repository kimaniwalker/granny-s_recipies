import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/categories';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsScreen from './screens/meals';
import MealDetailsScreen from './screens/mealDetails';
import HomeScreen from './screens/home';
import SettingsScreen from './screens/settings';
import CustomHeader from './components/customHeader';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FavoritesWrapper } from './context/favorites';
import FavoritesScreen from './screens/favorites';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


export default function App() {

  let [fontsLoaded] = useFonts({
    'montserratBold': Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }

  function BottomTabHandler() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            title: "Categories",
            tabBarIcon: ({ }) => (<Ionicons name="ios-menu-sharp" size={24} color="black" />),
            tabBarStyle: { position: 'absolute' },
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontFamily: 'montserratBold' }


          }}
        />
        {/*  <Tab.Screen
          name="Home Page"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ focused, size, color }) => (<AntDesign name="home" size={size} color={color} focused={focused} />),
            tabBarStyle: { position: 'absolute' },
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontFamily: 'montserratBold' }
          }}
        /> */}
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "Favorites",
            tabBarIcon: ({ }) => (<FontAwesome5 name="heart" size={24} color="black" />),
            tabBarStyle: { position: 'absolute' },
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontFamily: 'montserratBold' }
          }}
        />

        {/* <Tab.Screen
          name="Profile"
          component={SettingsScreen}
          options={{
            title: "Profile",
            tabBarIcon: ({ }) => (<MaterialIcons name="person-outline" size={24} color="black" />),
            tabBarStyle: { position: 'absolute' },
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontFamily: 'montserratBold' }




        />
          }} */}

      </Tab.Navigator>
    );
  }


  return (
    <>

      <StatusBar style='black' />

      <FavoritesWrapper>

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',

              },
              headerTransparent: true,
              headerTintColor: 'black',
              headerTitleStyle: {
                fontFamily: 'montserratBold',
                color: 'black',
                fontSize: 24
              },
              headerLargeTitleShadowVisible: true,
              headerBackButtonMenuEnabled: true,
              contentStyle: {
                backgroundColor: 'white'
              },
              headerBlurEffect: true,
            }}>

            <Stack.Screen name='All Categories' component={BottomTabHandler} />
            <Stack.Screen
              name='Meal Categories'
              component={CategoryScreen}
              options={{
                title: 'All Categories',
              }}
            />
            <Stack.Screen name='Meals Screen' component={MealsScreen} />
            <Stack.Screen name='Meal Details' component={MealDetailsScreen} />


          </Stack.Navigator>

        </NavigationContainer>
      </FavoritesWrapper>
    </>

  );
}

const styles = StyleSheet.create({

});
