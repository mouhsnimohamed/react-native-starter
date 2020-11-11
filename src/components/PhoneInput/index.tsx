import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import countriesList from './countries.json';

const PhoneInputText = () => {
  //   const phoneInputRef = useRef<
  //     React.RefObject<PhoneInput<typeof TextInput>> | null | undefined
  //   >(null);
  return <PhoneInput initialCountry="fr" countriesList={countriesList} />;
};

export default PhoneInputText;
