import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import Button from "@/components/Button";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <View className="flex-1 flex bg-neutral-100">
      <ImageBackground
        source={images.bgDark}
        resizeMode="cover"
        className="w-full h-full absolute"
      />
      <SafeAreaView className="flex-1 flex justify-center items-center px-8">
        <View className="w-full">
          <Text className="font-bold mb-5 text-primary-20 text-[16px] ">
            Welcome!
          </Text>
          <Text className="text-white text-[48px] font-light tracking-[10px] leading-[65px] mb-5">
            Find what you are looking for
          </Text>
          <Text className="font-regular mb-5 text-primary-20 text-[16px] ">
            We recommend you apply these settings so we can serve you better and
            get what you like
          </Text>
          <Button
            text="Personalize Your account"
            variant="contain"
            onPress={() => router.push("/personalization")}
          />
          <Button
            text="Skip"
            variant="outline"
            containerStyle="border border-neutral-5 mt-5"
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
