import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { RecoilRoot, useRecoilValue } from 'recoil';
import BottomNav from './navigation/BottomNav';
export default function App() {
  const [isReady, setIsReady] = useState(false);
  // 앱의 초기화 또는 다른 준비 작업을 수행합니다.
  const initializeApp = async () => {
    await Font.loadAsync({
      Bazzi: require("./assets/fonts/Bazzi.ttf"),
    });

    // 앱 초기화가 완료되면 스플래시 스크린을 숨깁니다.
    SplashScreen.hideAsync();
    setIsReady(true);
  };

  useEffect(() => {
    // 스플래시 스크린을 자동으로 숨기기 위해 preventAutoHideAsync()를 호출합니다.
    SplashScreen.preventAutoHideAsync();

    // 앱 초기화 함수를 호출합니다.
    initializeApp();
  }, []);

  return (
    <RecoilRoot>
      {isReady ? <BottomNav /> : null}
    </RecoilRoot>
  );
}
