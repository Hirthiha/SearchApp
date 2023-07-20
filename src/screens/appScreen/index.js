import {Text} from 'react-native';
import EmojiPickerComponent from '../../components/emojiPicker';
import TextInputComponent from '../../components/textInput';

export const AppScreen = () => {
  return (
    <>
      <EmojiPickerComponent />;
      <TextInputComponent />
      <Text>hloo</Text>
    </>
  );
};
