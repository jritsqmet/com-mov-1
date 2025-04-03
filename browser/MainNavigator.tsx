import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import Pantalla1Screen from "../screens/Pantalla1Screen";
import Pantalla2Screen from "../screens/Pantalla2Screen";
import Pantalla3Screen from "../screens/Pantalla3Screen";
import Pantalla4Screen from "../screens/Pantalla4Screen";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return <Stack.Navigator initialRouteName="Drawer">
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Drawer" component={MyDrawer} />
  </Stack.Navigator>;
}

function MyDrawer() {
  return <Drawer.Navigator initialRouteName="Pantalla 4">
    <Drawer.Screen name="Pantalla 1" component={Pantalla1Screen} />
    <Drawer.Screen name="Pantalla 2" component={Pantalla2Screen} />
    <Drawer.Screen name="Pantalla 3" component={Pantalla3Screen} />
    <Drawer.Screen name="Pantalla 4" component={Pantalla4Screen} />
  </Drawer.Navigator>;
}

export default function MainNavigator(){
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
};