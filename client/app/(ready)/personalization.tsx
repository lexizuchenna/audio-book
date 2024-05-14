import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";

import { images } from "@/constants";
import Button from "@/components/Button";

const Personalization = () => {
  const [topics, setTopics] = useState<string[]>([]);

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

  function handleAddTopic(topic: string) {
    const index = topics.findIndex((top) => top === topic);

    if (index !== -1) {
      setTopics((prevTopics) => prevTopics.filter((top) => top !== topic));
    } else {
      setTopics((prevTopics) => [...prevTopics, topic]);
    }
  }
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
            Personalization
          </Text>

          <Text className="font-regular mb-5 text-neutral-5 text-[16px]">
            Select topics that are of interest to you so we can bring books of
            that topic to you
          </Text>
          <View className="flex-row w-full gap-x-5 gap-y-3 flex-wrap mb-5">
            {TOPICS.map((topic) => (
              <TouchableOpacity
                className={`border border-neutral-5 rounded-3xl px-4 py-3 ${
                  topics.find((top) => top === topic) &&
                  "bg-primary-50 border-primary-50"
                }`}
                onPress={() => handleAddTopic(topic)}
                key={topic}
              >
                <Text className="text-neutral-5 font-bold">{topic}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text className="font-medium mb-5 text-neutral-5 text-[16px]">
            {topics.length} {topics.length <= 1 ? "topic" : "topics"} selected
          </Text>
          <Button
            text="Submit"
            variant="contain"
            onPress={() => router.push("/finish")}
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

export default Personalization;
