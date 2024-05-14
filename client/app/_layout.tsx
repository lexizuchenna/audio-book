import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
// import { useColorScheme } from "nativewind";

import MainProvider from "@/context/MainProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    light: require("../assets/fonts/light.ttf"),
    black: require("../assets/fonts/black.ttf"),
    bold: require("../assets/fonts/bold.ttf"),
    regular: require("../assets/fonts/regular.ttf"),
    medium: require("../assets/fonts/medium.ttf"),
    semibold: require("../assets/fonts/semibold.ttf"),
    extrabold: require("../assets/fonts/extrabold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <MainProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(ready)" options={{ headerShown: false }} />
        <Stack.Screen name="player/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="reader/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
      </Stack>
    </MainProvider>
  );
}
