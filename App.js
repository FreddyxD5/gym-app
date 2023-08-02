import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import GuestNavigation from './src/navigation/GuestNavigation';
import ConfigApp from './src/config/ConfigApp';
//Temas
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, MD2DarkTheme as DarkThemePaper } from 'react-native-paper';
export default function App() {
  // const [theme, setTheme] = useState("dark")
  const [isLogged, setIsLogged] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [language, setLanguage] = useState("")

  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      myOwnColor: '#BADA55',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar 
          animated={true}          
          barStyle='dark-content'
          showHideTransition='slide'
          />
        {/* Pantallas */}
        <GuestNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarStyle:{

  }
});
