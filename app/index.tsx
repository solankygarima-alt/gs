import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const Index = () => {
  const Images = [
    require("@/assets/images/dice1.png"),
    require("@/assets/images/dice2.png"),
    require("@/assets/images/dice3.png"),
    require("@/assets/images/dice4.png"),
    require("@/assets/images/dice5.png"),
    require("@/assets/images/dice6.png"),
  ];

  const [diceImage, setDiceImage] = useState(Images[0]);

  function rollDice() {
    const random = Math.floor(Math.random() * 6);
    setDiceImage(Images[random]);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1E1E2C",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 28,
          color: "#fff",
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        🎲 Dice Roller
      </Text>

      {/* Dice Card */}
      <View
        style={{
          backgroundColor: "#2E2E3E",
          padding: 30,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 10,
          marginBottom: 40,
        }}
      >
        <Image
          source={diceImage}
          style={{
            height: 100,
            width: 100,
          }}
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={rollDice}
        style={{
          backgroundColor: "#FF6B6B",
          paddingVertical: 12,
          paddingHorizontal: 40,
          borderRadius: 25,
          elevation: 5,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Roll Dice
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
