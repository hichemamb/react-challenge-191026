import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from './app/index';
// import { AppRegistry, View } from 'react-native';
// import Routes from './app/src/Routes'
// import './app/src/Styles';

export default function App() {
  return (
    <AppContainer/>
  )
}
// const MainNavigator = createStackNavigator({
//   Home: {screen: Home},
//   Profile: {screen: StudentsListScreen},
// });

// const App = createAppContainer(MainNavigator);

// export default App;


// export default class App extends React.Component {
//   render() {
//     return <Routes />;
//   }
// }

// AppRegistry.registerComponent('App', () => App)


// const data = [
//   {
//     id: 1,
//     name: "Thomas DERUEL",
//     age: 25,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
//   {
//     id: 2,
//     name: "Thomas FRANJA",
//     age: 29,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
//   {
//     id: 4,
//     name: "Hichem AMAR B",
//     age: 21,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
//   {
//     id: 5,
//     name: "Hichem AMAR B",
//     age: 21,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
//   {
//     id: 6,
//     name: "Hichem AMAR B",
//     age: 21,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
//   {
//     id: 7,
//     name: "Hichem AMAR B",
//     age: 21,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
//   {
//     id: 8,
//     name: "Hichem AMAR B",
//     age: 21,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
//   {
//     id: 9,
//     name: "Hichem AMAR B",
//     age: 21,
//     img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
//   },
// ]

// const styles = StyleSheet.create({
//   containerHome: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

// const themeButton = {
//   Button: {
//     // raised: true,
//     containerStyle: {
//       margin: 10
//     },

//     // Button styles
//     buttonStyle: {
//       backgroundColor: '#191C23',
//       width: 250,
//       height: 64
//     },
//     titleStyle: {
  //       color: '#fff',
  //       fontSize: 16
  //     },
  //   }
  // };
  
// This is the /home
// class HomeScreen extends React.Component {
//   // static navigationOptions = {
//   //   title: '',
//   // };
//   render() {
//     // const { navigate } = this.props.navigation;
//     return (
//       // <View style={styles.containerHome}>
//       //   <Image
//       //       style={{width: 59}}
//       //       source={require('./assets/hetic-logo.png')}
//       //     />
//       //   {/* <TextInput placeholder="Nom d'utilisateur"></TextInput>
//       //   <TextInput placeholder="Mot de passe"></TextInput> */}
//       //   {/* <ThemeProvider theme={themeInput}> */}
//       //     {/* <Input 
//       //       containerStyle={{ margin: 20, width: 300 }}
//       //       errorMessage={true ? "" : "Nom d'utilisateur non valide"}
//       //       placeholder="Nom d'utilisateur"
//       //     />
//       //     <Input 
//       //       containerStyle={{ margin: 20, width: 300 }}
//       //       errorMessage={true ? "" : "Mot de passe non valide"}
//       //       placeholder="Mot de passe"
//       //     /> */}
//       //     <InputText 
//       //       placeholder="Nom d'utilisateur"
//       //       setError="rrr"
//       //     />
//       //     <InputText 
//       //       placeholder="Mot de passe"
//       //     />
//       //   {/* </ThemeProvider> */}
//       //   <ThemeProvider theme={themeButton}>
//       //     <View>
//       //         <Button
//       //         containerStyle={{marginTop: 30}}
//       //         title="S'identifier"
//       //         type="outline"
//       //         onPress={() => this.props.navigation.navigate('StudentsList')}
//       //         // onPress={ () => navigate('StudentsList') }
//       //         />

//       //         <Button
//       //         buttonStyle={{ backgroundColor: 'transparent' }}
//       //         titleStyle={{ color: '#191C23' }}
//       //         title="Créer un compte"
//       //         type="clear"
//       //         />
//       //     </View>
//       //   </ThemeProvider>
//       // </View>
//     );
//   }
// }



// This is the component /students list
// class StudentsListScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Liste des étudiants',
//   };
//   render() {
//     return (
//       <ScrollView> 
//           <Card
//           // image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
//           >
//             <View style={styles.containerHome}>
//               <Avatar rounded size="medium" title="TD" containerStyle={{ margin: 20 }}  />
//               <Text h3>Thomas DERUEL</Text>
//               <Text h4>25 ans</Text>
//               <ThemeProvider theme={themeButton}>
//                 <Button
//                   title="Voir cet étudiant"
//                   type="outline"
//                   onPress={() => this.props.navigation.push('StudentsInfos')}
//                 />
//               </ThemeProvider>
//             </View>
//             {/* data.map((d, i) => {
//               return(
//               );
//             }) */}
//         </Card>
//         <Card
//           // image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
//           >
//             <View style={styles.containerHome}>
//               <Avatar rounded size="medium" title="TF" containerStyle={{ margin: 20 }}  />
//               <Text h3>Thomas FRANJA</Text>
//               <Text h4>29 ans</Text>
//               {/* <Divider style={{ backgroundColor: 'red', marginTop: 10 }}  />  */}
//               <ThemeProvider theme={themeButton}>
//                 <Button
//                   title="Voir cet étudiant"
//                   type="outline"
//                   onPress={() => this.props.navigation.push('StudentsInfos')}
//                 />
//               </ThemeProvider>
//             </View>
//             {/* data.map((d, i) => {
//               return(
//               );
//             }) */}
//         </Card>
//         <Card
//           // image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
//           >
//             <View style={styles.containerHome}>
//               <Avatar rounded size="medium" title="TG" containerStyle={{ margin: 20 }}  />
//               <Text h3>Thomas GIL</Text>
//               <Text h4>35 ans</Text>
//               {/* <Divider style={{ backgroundColor: 'red', marginTop: 10 }}  />  */}
//               <ThemeProvider theme={themeButton}>
//                 <Button
//                   title="Voir cet étudiant"
//                   type="outline"
//                   onPress={() => this.props.navigation.push('StudentsInfos')}
//                 />
//               </ThemeProvider>
//             </View>
//             {/* data.map((d, i) => {
//               return(
//               );
//             }) */}
//         </Card>
//       </ScrollView>
//     );
//   }
// }


// Infos students


// class StudentsInfosScreen extends React.Component {
//   render() {
//     return (
//         <ScrollView>
//           <Text>This is the vue StudentsInfos</Text>
//         </ScrollView>
//     )
//   }
// }

// const Root = createStackNavigator(
//   {
//     Connexion: HomeScreen,
//     StudentsList: StudentsListScreen,
//     StudentsInfos: StudentsInfosScreen
//   },
//   {
//     initialRouteName: 'Connexion',
//   }
// );

// const AppContainer = createAppContainer(Root);


