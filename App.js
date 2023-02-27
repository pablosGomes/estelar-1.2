import 'react-native-gesture-handler';
import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from"./Screens/Home";
import StartMapScreen from"./Screens/StarMap";
import DailyPicScreen from"./Screens/DailyPic";
import SpaceCraftScreen from"./Screens/SpaceCraft";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="StarMap" component={StarMapScreen}/>
      <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
      <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}