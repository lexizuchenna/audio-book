import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  text: string;
  variant: "contain" | "outline";
  width?: number;
  onPress: () => void;
  containerStyle?: string;
}

const Button = ({
  text,
  variant,
  width,
  onPress,
  containerStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`justify-center items-center rounded-md h-16 ${containerStyle} ${
        variant === "contain" ? "bg-primary-50" : "bg-transparent"
      }`}
      style={{ width: width ? width : "100%" }}
      onPress={onPress}
    >
      <Text className={`text-center text-white text-[15px] font-bold `}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
