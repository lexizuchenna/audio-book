import { View, Text, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";

import { images } from "@/constants";
import Button from "@/components/Button";

const Finish = () => {
  return (
    <View className="flex flex-1 bg-neutral-100 ">
      <ImageBackground
        source={images.bgDark}
        resizeMode="cover"
        className="w-full h-full absolute"
      />
      <SafeAreaView className="flex flex-1 justify-center items-center w-full px-8">
        <View>
          <View className="justify-center items-center">
            <Image
              source={images.welcomeDark}
              className="w-[300px] h-[300px]"
              resizeMode="contain"
            />
          </View>

          <View>
            <Text className="text-white font-semibold text-[22px] text-center my-3">
              You are ready to go
            </Text>
            <Text className="text-white font-regular text-center text-[15px] px-4 mb-5">
              Congratulations, any interesting topic will be made available,
              press to button below to finish
            </Text>
          </View>
        </View>

        <Button
          text={"Finish"}
          variant="contain"
          onPress={() => router.push("/home")}
        />
      </SafeAreaView>
    </View>
  );
};

export default Finish;
