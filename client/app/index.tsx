import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { router } from "expo-router";
import Swiper from "react-native-swiper";

import PaginationDots from "@/components/PaginationDots";
import Button from "@/components/Button";
import { images, sizes } from "@/constants";

export default function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const swiperRef = useRef<Swiper>(null);

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(currentIndex + 1);
    }
  }

  function handleSkip() {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(2);
    }
  }

  const contents = [
    {
      image: images.onboard1Dark,
      text1: "Welcome to AudioVerse!",
      text2:
        "Embark on a journey of storytelling and imagination with our audiobook app.",
    },
    {
      image: images.onboard2Dark,
      text1: "Discover captivating stories",
      text2:
        "Explore a vast library of audiobooks across genres, from classics to bestsellers.",
    },
    {
      image: images.onboard3Dark,
      text1: "Listen anytime, anywhere",
      text2:
        "Enjoy your favorite books on the go, whether you're commuting, exercising, or relaxing at home.",
    },
  ];

  return (
    <View className="flex flex-1 bg-neutral-100 ">
      <ImageBackground
        source={images.bgDark}
        resizeMode="cover"
        className="w-full h-full absolute"
      />
      <SafeAreaView className="flex flex-1 justify-center items-center">
        <View className="h-[450px]">
          <Swiper
            showsPagination={false}
            onIndexChanged={(i) => setCurrentIndex(i)}
            scrollEnabled={false}
            loop={false}
            ref={swiperRef}
          >
            {contents.map((content, i) => (
              <View key={i}>
                <View className="justify-center w-full items-center">
                  <Image
                    source={content.image}
                    className="w-[300px] h-[300px]"
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <Text className="text-white font-semibold text-[22px] text-center my-3">
                    {content.text1}
                  </Text>
                  <Text className="text-white font-regular text-center text-[15px] px-4 mb-5">
                    {content.text2}
                  </Text>
                </View>
              </View>
            ))}
          </Swiper>
        </View>

        <PaginationDots items={[0, 1, 2]} currentIndex={currentIndex} />
        <View className="flex flex-row justify-between items-center w-full px-[20] absolute bottom-[50]">
          {currentIndex === 2 ? (
            <Button
              text="Lets Get Started"
              variant="contain"
              width={sizes.width - 40}
              onPress={() => router.push("/signup")}
            />
          ) : (
            <>
              <Button
                text="Skip"
                variant="outline"
                width={sizes.width / 2.6}
                onPress={handleSkip}
              />
              <Button
                text={"Next"}
                variant="contain"
                width={sizes.width / 2.6}
                onPress={handleNext}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
