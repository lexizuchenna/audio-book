import { View, Text, Image, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { images } from "@/constants";
import Input from "@/components/Input";
import Button from "@/components/Button";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isComplete, setIsComplete] = useState<boolean>(false);

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
            Forgot your password?
          </Text>
          <Text className="text-white font-medium text-[16px] mb-6">
            {!isComplete
              ? "Please fill your email address and we will send you a link to reset your password"
              : "If the email you entered exists, a link will be sent to help me get back into your account"}
          </Text>
          {isComplete && (
            <>
              <Input
                placeholder="Email"
                onChangeText={() => {}}
                value={formData.email}
              />

              <Button
                containerStyle="mt-3"
                variant="contain"
                text="Submit"
                onPress={() => router.push("/forgot_password")}
              />
            </>
          )}
          <Button
            containerStyle="mt-3 border border-white"
            variant="outline"
            text="Back"
            onPress={() => router.back()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
