import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './Screen/Home'
import Login from './Screen/Login'
import ScanQRCode from './Screen/ScanQRCode'
import LookupAsset from './Screen/LookupAsset'
import ViewInventory from './Screen/ViewInventory'
import SeeHistory from './Screen/SeeHistory'
import Settings from './Screen/Setting'
import IconWithBadge from "./Component/IconWithBadge";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeIconWithBadge = (props) => {
    // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
}
const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
    Home,
    Login,
    LookupAsset,
    ViewInventory,
    SeeHistory
})
CategoryStack.navigationOptions = {
    tabBarLabel: "Home",
}

const ScanStack = createStackNavigator({
    ScanQRCode
})
ScanStack.navigationOptions = {
    tabBarLabel: 'Scan QRCode'
}
const SettingStack = createStackNavigator({ Settings })
SettingStack.navigationOptions = {
    tabBarLabel: 'Settings'
}
const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    ScanStack,
    SettingStack
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'CategoryStack') {
                    iconName = `ios-planet`;
                    // Sometimes we want to add badges to some icons. 
                    // You can check the implementation below.
                    //IconComponent = HomeIconWithBadge;
                } else if (routeName === 'ScanStack') {
                    iconName = `ios-planet`;
                }
                else if (routeName === 'SettingStack') {
                    iconName = `ios-planet`;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={36} color={focused ? color.ACTIVE : color.INACTIVE} />;
            },
        })
    }
)
export default AppNavigator;