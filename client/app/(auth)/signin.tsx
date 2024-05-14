import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import { icons, images } from "@/constants";
import Input from "@/components/Input";
import Button from "@/components/Button";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isRemember, setIsRemember] = useState<boolean>(false);

  function onInputChange(name: string, value: string) {
    setFormData({ ...formData, [name]: value });
  }
  return (
    <SafeAreaView className="bg-neutral-100 flex flex-1">
      <View className="justify-center items-center mt-20">
        <Image
          source={images.logoDark}
          className="h-[120] w-[120]"
          resizeMode="contain"
        />
      </View>
      <ScrollView>
        <View className="flex flex-col justify-center mt-10 mx-10">
          <Text className="text-white font-bold text-[20px] mb-6">
            Login to your account on
          </Text>
          <Input
            placeholder="Email"
            onChangeText={() => {}}
            value={formData.email}
          />
          <Input
            placeholder="Password"
            onChangeText={(text) => onInputChange("password", text)}
            value={formData.password}
          />

          <View className="flex-row justify-start items-center">
            <TouchableOpacity onPress={() => setIsRemember((prev) => !prev)}>
              <View
                className={`h-6 w-6 border-primary-40 border rounded-lg ${
                  isRemember && "bg-primary-40"
                }`}
                children={
                  isRemember && (
                    <Image
                      source={icons.tick}
                      className="h-full w-full"
                      resizeMode="cover"
                    />
                  )
                }
              />
            </TouchableOpacity>
            <Text className="text-neutral-5 font-regular text-justify my-5 ml-4">
              Remember me
            </Text>
          </View>

          <Button
            containerStyle="mt-3"
            variant="contain"
            text="Sign In"
            onPress={() => router.push("/welcome")}
          />
          <Text className="text-right mt-5 text-[15px]">
            <Link className="text-accent-50 font-bold" href="/signup">
              Forgot password?
            </Link>
          </Text>
        </View>
        <Text className="text-center text-neutral-5 font-medium mt-5">
          Already have an account?{" "}
          <Link className="text-accent-50 underline font-bold" href="/signup">
            Sign in
          </Link>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
