import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen
          name="signup_confirmation"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="forgot_password" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#0F0F29" />
    </>
  );
};

export default AuthLayout;
