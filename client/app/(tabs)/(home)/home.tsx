import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";

const Home = () => {
  const TOPICS = [
    "Art",
    "Business",
    "Biography",
    "Comedy",
    "Culture",
    "Education",
    "News",
    "Philosophy",
    "Psychology",
    "Technology",
    "Travel",
  ];

  const placeholders = [
    images.placeholder1,
    images.placeholder2,
    images.placeholder1,
    images.placeholder2,
  ];
  return (
    <SafeAreaView className="bg-neutral-100 flex-1 px-4">
      <View className="flex-row justify-center items-center mt-6">
        <View className="flex-row justify-start items-center flex-1">
          <Image
            source={images.logoDark}
            className="w-[45px] h-[45px] mr-2"
            resizeMode="contain"
          />
          <Text className="font-bold text-white text-2xl">
            Audio<Text className="font-regular">Verse</Text>{" "}
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.settings}
            className="w-[30px] h-[30px]"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[0, 1, 2, 3]}
        renderItem={({ item }) => <Text className="text-white text-lg">1</Text>}
        ListHeaderComponent={() => (
          <View className="mt-8">
            <View className="flex justify-between items-center flex-row mb-3">
              <Text className="text-white font-semibold text-[15px]">
                Categories
              </Text>

              <TouchableOpacity>
                <Text className="font-semibold text-primary-40">See more</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={TOPICS}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  className={`rounded-2xl px-4 py-[10px] bg-neutral-80 ${
                    index !== TOPICS.length - 1 && "mr-3"
                  }`}
                >
                  <Text className="text-neutral-5 font-bold">{item}</Text>
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-3"
            />
            <View className="flex justify-between items-center flex-row mb-3 mt-8">
              <Text className="text-white font-semibold text-[15px]">
                Recommended for you
              </Text>

              <TouchableOpacity>
                <Text className="font-semibold text-primary-40">See more</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={placeholders}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  className={index !== placeholders.length - 1 ? "mr-3" : ""}
                >
                  <Image
                    source={item}
                    className="w-[200] h-[300]"
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-3"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
