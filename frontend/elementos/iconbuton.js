import React from "react";
import { IconButton, MD3Colors } from "react-native-paper";

const Button = () => {
  const [isButtonPressed, setIsButtonPressed] = React.useState(false);

  const onButtonPress = () => {
    setIsButtonPressed(true);
  };

  const onButtonPressAgain = () => {
    setIsButtonPressed(false);
  };

  return (
    <IconButton
      onPress={onButtonPress}
      selected={isButtonPressed}
    />
  );
};

export default Button;