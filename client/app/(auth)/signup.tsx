import { View, Text, Image, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "@/constants";
import Input from "@/components/Input";
import Button from "@/components/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dob: new Date(),
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
          <Text className="text-white font-bold text-[20px] mb-6">
            Create an account on{" "}
            <Text className="text-accent-50">AudioVerse</Text>
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
          <Input
            placeholder="Date of birth"
            onChangeText={() => {}}
            value={formData.dob.toDateString()}
          />

          <Text className="text-neutral-5 font-medium text-justify my-5">
            By signing up, you agree to our{" "}
            <Link className="font-bold underline text-accent-50" href="/">
              Terms,
            </Link>{" "}
            <Link className="font-bold underline text-accent-50" href="/">
              Data Policy
            </Link>{" "}
            and{" "}
            <Link className="font-bold underline text-accent-50" href="/">
              Cookies Policy
            </Link>{" "}
          </Text>

          <Button
            containerStyle="mt-3"
            variant="contain"
            text="Sign Up"
            onPress={() => {}}
          />
        </View>
        <Text className="text-center text-neutral-5 font-medium mt-5">
          Already have an account?{" "}
          <Link className="text-accent-50 underline font-bold" href="/signin">
            Sign in
          </Link>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
