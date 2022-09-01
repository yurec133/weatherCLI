import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {FullItemScreen} from '../screens/FullItemScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  Weather: {
    name: string;
  };
  FullItem: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Weather" component={HomeScreen} />
        <Stack.Screen
          name="FullItem"
          options={{title: 'Description'}}
          component={FullItemScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
