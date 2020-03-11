import React, { useState } from 'react';
// import { View, StyleSheet, Image, ScrollView, ShadowPropTypesIOS } from 'react-native';
import { ThemeProvider, Input } from 'react-native-elements';


const themeInput = {
    containerStyle: {
      marginTop: 20, 
      width: 300
    }
  }
const InputText = (props) => {
    const [error, setError] = useState("Nom d'utilisateur non valide")
    
    return (
        <ThemeProvider theme={themeInput}>
            <Input 
                containerStyle={ themeInput.containerStyle }
                errorMessage={error}
                placeholder={props.placeholder}
                setError={setError}
            />
        </ThemeProvider>
    )
};


export default InputText;