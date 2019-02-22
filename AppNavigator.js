import {createStackNavigator} from 'react-navigation';
import Home from './Screen/Home'
import Login from './Screen/Login'
import ScanQRCode from './Screen/ScanQRCode'
import LookupAsset from './Screen/LookupAsset'
import ViewInventory from './Screen/ViewInventory'
import SeeHistory from './Screen/SeeHistory'

const AppNavigator = createStackNavigator({
    Home : {
        screen: Home
    },
    Login : {
        screen: Login
    },
    ScanQRCode : {
        screen: ScanQRCode
    },
    LookupAsset : {
        screen: LookupAsset
    },
    ViewInventory : {
        screen: ViewInventory
    },
    SeeHistory : {
        screen: SeeHistory
    }
    
})

export default AppNavigator;