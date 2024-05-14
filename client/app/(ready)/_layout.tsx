import { ImageBackground, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";

const ReadyLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="personalization" options={{ headerShown: false }} />
        <Stack.Screen name="finish" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="transparent" />
    </>
  );
};

export default ReadyLayout;
