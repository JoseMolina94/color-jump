import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GameHome} from './src/screens/game-home';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={GameHome}
          options={{
            statusBarHidden: true,
            navigationBarHidden: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
