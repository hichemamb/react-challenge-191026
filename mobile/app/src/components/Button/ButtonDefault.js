import * as React from 'react';
// import { View } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

// const ButtonDefault = ({location, navigation }) => {
function ButtonDefault({location, navigation }) {
    // const navigate = (location) => {
    //     // navigation.navigate(location)
    //     console.log('location : ', location)
    //     console.log('props : ', props)
    //     // return props.navigation;
        

    const handlePress = () => {
    navigation.navigate(location)
    console.log("location", location)
    console.log("navigation", navigation)
    }
    return (
        <ThemeProvider theme={themeButton}>
            <Button
                onPress={() => handlePress()}
            />
            {/* <Button
                buttonStyle={{ backgroundColor: 'transparent' }}
                titleStyle={{ color: '#191C23' }}
                // title={`Go to ${Home}`}
                type="clear"
                onPress={() => navigate(props.location)}
                title={props.title}
            /> */}
        </ThemeProvider>
    )
}

export default ButtonDefault;

const themeButton = {
    Button: {
    // raised: true,
    containerStyle: {
        margin: 10
    },

    // Button styles
    buttonStyle: {
        backgroundColor: '#191C23',
        width: 250,
        height: 64
    },
    titleStyle: {
        color: '#fff',
        fontSize: 16
    },
}
};
