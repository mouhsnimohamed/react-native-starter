import styled from 'styled-components/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from './data/slides';
import React from 'react';

interface DataItem {
  title: string
  text: string
  Image: () => JSX.Element
}
const Slider = () => {
  const renderItem = ({ item }: {item: DataItem}) => {
    const { Image } = item;
    return (
      <BaseView>
        <Image />
        <Title>{item.title}</Title>
        <Paragraph>{item.text}</Paragraph>
      </BaseView>
    );
  };
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      showNextButton={false}
      showDoneButton={false}
      dotStyle={{
        backgroundColor: 'white',
      }}
      activeDotStyle={{
        backgroundColor: '#557EA8',
      }}
    />
  );
};

const BaseView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-horizontal: 28px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 30px;
  color: white;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Paragraph = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: white;
  text-align: center;
`;
export default Slider;
