import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import All from './screens/All';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'home': 'home-outline'} size={size} color={color}/>,
                headerShown: false
            }}/>
            <Tab.Screen 
            name="Library" 
            component={Home}
            options={{
                tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'library': 'library-outline'} size={size} color={color}/>,
                headerShown: false 
            }}/>
            <Tab.Screen 
            name="All files" 
            component={All}
            options={{
                tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'file-tray': 'file-tray-outline'} size={size} color={color}/>,
                headerShown: false
            }}/>
        </Tab.Navigator>
    )
}

export default function Navigation () {
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}