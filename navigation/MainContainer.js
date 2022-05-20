import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingScreen from './screens/SettingScreen';

//screen names
const homeName = 'Home';
const detailsName = 'Blogs';
const settingName = 'Setting';

const Tab = createBottomTabNavigator();

function MainContainer(){
    return (
        <NavigationContainer>
    
    <Tab.Navigator
   initialRouteName={homeName}
   screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size}) =>{
           let iconsName;
           let rn = route.name;

           if (rn === homeName){
               iconsName = focused ? 'home': 'home-outline';

           }else if  (rn === detailsName){
               iconsName = focused ? 'list' : 'list-outline';
           }else if (rn === settingName){
            iconsName = focused ? 'settings' : 'settings-outline';
           }

           //you can return any component that you like here
           return <Ionicons name={iconsName} size={size} color={color} />
       }


   })}
   tabBarOption={{
       activeTintColor: 'tomato',
       inactiveTintColor: 'gray',
       labelStyle:{ paddingBottom: 10 , fontSize:10,},
       style: {padding: 10, height: 70},

   }}
    > 
 <Tab.Screen name={homeName} component={HomeScreen} />
 <Tab.Screen name={detailsName} component={DetailsScreen} />
 <Tab.Screen name={settingName} component={SettingScreen} />




    </Tab.Navigator>
    </NavigationContainer>
    );
}

export default MainContainer;