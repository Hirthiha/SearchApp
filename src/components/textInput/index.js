import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {strings} from '../../contants/strings';
import {colors} from '../../contants/colors';

const TextInputComponent = ({
  onChangeText = () => {
    // This is intentional
  },
  value = '',
  maxLength = 250,
  placeholder = strings.search,
  keyboardType = 'default',
  containerStyle = {},
  textCaptitalize = 'none',

  hidden = false,
  inputTextStyle = {},
}) => {
  return (
    <>
      <View style={{...styles.container, ...containerStyle}}>
        <TextInput
          style={[styles.inputStyle, inputTextStyle]}
          onChangeText={text => onChangeText(text)}
          maxLength={maxLength}
          keyboardType={keyboardType}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          value={value}
          autoCapitalize={textCaptitalize}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: colors.grey,
    borderRadius: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 42,
  },
  inputStyle: {
    width: '95%',
    fontSize: 15,
    textAlignVertical: 'center',
    color: colors.black_21,
    letterSpacing: 0.18,
    paddingVertical: 6,
  },
});

export default TextInputComponent;
