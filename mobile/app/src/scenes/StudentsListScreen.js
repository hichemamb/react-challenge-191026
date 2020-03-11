import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemeProvider, Button, Card, Text, Avatar } from 'react-native-elements';
import 'react-native-gesture-handler';


const StudentsListScreen = () => {
    return (
        <ScrollView> 
            <Card
            // image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
            >
                <View style={styles.containerHome}>
                    <Avatar rounded size="medium" title="TD" containerStyle={{ margin: 20 }}  />
                    <Text h3>Thomas DERUEL</Text>
                    <Text h4>25 ans</Text>
                        <ThemeProvider theme={themeButton}>
                            <Button
                            title="Voir cet étudiant"
                            type="outline"
                            onPress={() => {this.props.navigation.push('StudentsInfos')}}
                            />
                        </ThemeProvider>
                </View>
            {/* data.map((d, i) => {
            return(
            );
            }) */}
            </Card>
            <Card
            // image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
            >
                <View style={styles.containerHome}>
                    <Avatar rounded size="medium" title="TF" containerStyle={{ margin: 20 }}  />
                    <Text h3>Thomas FRANJA</Text>
                    <Text h4>29 ans</Text>
                    {/* <Divider style={{ backgroundColor: 'red', marginTop: 10 }}  />  */}
                        <ThemeProvider theme={themeButton}>
                            <Button
                            title="Voir cet étudiant"
                            type="outline"
                            onPress={() => this.props.navigation.push('StudentsInfos')}
                            />
                        </ThemeProvider>
                </View>
            {/* data.map((d, i) => {
            return(
            );
            }) */}
            </Card>
    
            <Card
            // image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
            >
                <View style={styles.containerHome}>
                    <Avatar rounded size="medium" title="TG" containerStyle={{ margin: 20 }}  />
                    <Text h3>Thomas GIL</Text>
                    <Text h4>35 ans</Text>
                    {/* <Divider style={{ backgroundColor: 'red', marginTop: 10 }}  />  */}
                        <ThemeProvider theme={themeButton}>
                            <Button
                            title="Voir cet étudiant"
                            type="outline"
                            onPress={() => this.props.navigation.push('StudentsInfos')}
                            />
                        </ThemeProvider>
                </View>
            {/* data.map((d, i) => {
            return(
            );
            }) */}
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

const themeButton = {
    containerStyle: {
        margin: 10
    }
}

export default StudentsListScreen;