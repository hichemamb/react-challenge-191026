import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './src/scenes/Home';
import StudentsListScreen from './src/scenes/StudentsListScreen';

const myStack = createSwitchNavigator (
    {
        auth: Home,
        app: StudentsListScreen
    },
    {
        initialRouteName: 'auth'
    }
);

const AppContainer = createAppContainer(myStack);

export default AppContainer;
