import React, { useEffect, useState } from 'react';
import BottomNav from './navigation/BottomNav';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const getFonts = async () => {
    await Font.loadAsync({
      Bazzi: require("./assets/fonts/Bazzi.ttf"),
    });
    setIsReady(true)
  };
  useEffect(() => {
    getFonts()
  }, [])
  return (
    isReady ? (<BottomNav></BottomNav>) : (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setIsReady(true)}
        onError={() => { }}
      />)

  );
}