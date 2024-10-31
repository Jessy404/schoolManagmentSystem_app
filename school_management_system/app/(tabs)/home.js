import 'react-native-gesture-handler'; // يجب إضافتها
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; 
import GetStarted from '../screens/GetStarted'; // تأكدي من المسار الصحيح

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // منع الشاشة من الاختفاء قبل تحميل الخطوط
        await Font.loadAsync({
          Outfit: require('../assets/fonts/Outfit-Regular.ttf'), // تأكد من استخدام / بدلاً من \
        });
        setFontsLoaded(true);
      } catch (error) {
        console.warn(error); // طباعة الأخطاء في وحدة التحكم
      } finally {
        await SplashScreen.hideAsync(); // إخفاء شاشة التحميل بعد تحميل الخطوط
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // إرجاع null إذا لم يتم تحميل الخطوط
  }

  return (
    <GetStarted/>
  );
}
