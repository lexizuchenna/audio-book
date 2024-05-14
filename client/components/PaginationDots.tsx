import { View, Text } from "react-native";
import React from "react";

interface Props {
  items: number[];
  currentIndex: number;
}

const PaginationDots = ({ items, currentIndex }: Props) => {
  return (
    <View className="flex-row justify-center items-center mt-3">
      {items.map((_, index) => (
        <View
          key={index + 1}
          className={`rounded-full mx-2 bg-purple-600 w-[14] h-[14] ${
            index === currentIndex ? " bg-primary-40" : "bg-neutral-80"
          }  `}
        />
      ))}
    </View>
  );
};

export default PaginationDots;
