import { View, TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const Input = ({ placeholder, onChangeText, value }: InputProps) => {
  return (
    <View className="w-full bg-[#1C1C4D] rounded-md pl-5 py-3 mb-4">
      <TextInput
        placeholder={placeholder}
        className="text-white text-[14px] font-semibold py-1"
        placeholderTextColor="#6A6A8B"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
