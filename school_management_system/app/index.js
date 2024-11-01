import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; // استيراد expo-splash-screen
import GetStarted from "../app/screens/GetStarted";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); 
        await Font.loadAsync({
          Outfit: require('../assets/fonts/Outfit-Regular.ttf'), 
        });
        setFontsLoaded(true);
      } catch (error) {
        console.warn(error);
      } finally {
        await SplashScreen.hideAsync(); 
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <GetStarted />
  );
}
