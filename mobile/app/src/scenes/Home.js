import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
// import { ThemeProvider, Button } from 'react-native-elements';
import 'react-native-gesture-handler';
import InputText from '../components/InputText';   
import ButtonDefault from '../components/Button/ButtonDefault';

const Home = ({navigation}) => {
    // const navigate = this.props.navigation;
    // console.log(navigation);
    
    return (
        <View style={styles.containerHome}>
            <Image
            style={{width: 59}}
            source={require('../../../assets/hetic-logo.png')}
            />
            <InputText 
            placeholder="Nom d'utilisateur"
            setError="rrr"
            />
            <InputText 
            placeholder="Mot de passe"
            />
            {/* <ButtonDefault
                // currentScreen={currentScreen}
                navigation={navigation}
                location="about"
            /> */}
            <Button 
            title="HELLO"
            onPress={()=> navigation.navigate('app')}
            />
            {/* <Button
                title="got to"
                onPress={navigation.navigate('about')}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});
    // static navigationOptions = {
    //     title: '',
    //   };


export default Home;