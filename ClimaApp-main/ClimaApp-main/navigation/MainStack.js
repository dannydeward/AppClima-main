import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DescriptionApp from '../screens/DescriptionApp'
import MainTab from './MainTab'
import Search from "./screens/Search";
import Resultado from "./screens/Resultado";


const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name='DescriptionApp'
                    component={DescriptionApp}
                />
                <Stack.Screen
                    name='Home'
                    component={MainTab}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const screens = {
  Search: {
    search:Search
  },
  Mapa: {
    mapa: Mapa
  }
}

const config = {
  headerMode: 'none',
  initialRouteName: 'Search'
}


export default MainStack
