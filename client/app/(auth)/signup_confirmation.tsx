import { View, Text, Image, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { images } from "@/constants";
import Input from "@/components/Input";
import Button from "@/components/Button";

const SignUpConfirmation = () => {
  const [formData, setFormData] = useState({
    code: "",
  });

  function onInputChange(name: string, value: string) {
    setFormData({ ...formData, [name]: value });
  }
  return (
    <SafeAreaView className="bg-neutral-100 flex flex-1">
      <View className="justify-center items-center mt-20">
        <Image
          source={images.logoDark}
          className="h-[120] w-[120] "
          resizeMode="contain"
        />
      </View>
      <ScrollView>
        <View className="flex flex-col justify-center mt-10 mx-10">
          <Text className="text-white font-bold text-[20px] mb-2">
            Confirm your account
          </Text>
          <Text className="text-white font-medium text-[16px] mb-6">
            Enter the confirmation code we sent to{" "}
            <Text className="font-bold">mail@gmail.com</Text>
          </Text>
          <Input
            placeholder="Confirmation Code"
            onChangeText={() => {}}
            value={formData.code}
          />

          <Button
            containerStyle="mt-3"
            variant="contain"
            text="Submit"
            onPress={() => router.push("/forgot_password")}
          />
          <Button
            containerStyle="mt-3 border border-white"
            variant="outline"
            text="Cancel"
            onPress={() => router.back()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpConfirmation;
