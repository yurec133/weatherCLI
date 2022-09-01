import React from 'react';
import styled from 'styled-components/native';
import {Image, View} from 'react-native';
import {formatDate, getIconsWeather} from '../utils';
import {DataItem} from '../redux/types';

interface Props {
  isLoading: boolean;
  item: DataItem;
}
export const WeatherItem: React.FC<Props> = ({isLoading, item}) => {
  if (isLoading) {
    return null;
  }
  const {
    dt,
    main: {temp},
    weather: {
      0: {icon},
    },
  } = item;
  return (
    <CardItem>
      <Row>
        <Col>
          <Date>{formatDate(dt)}</Date>
        </Col>
        <Col>
          <Image
            style={{width: 40, height: 40}}
            source={getIconsWeather(icon)}
          />
        </Col>
        <Col>
          <View style={{flexDirection: 'row'}}>
            <Temp>{Math.round(temp)}</Temp>
            <TempSmall>°C</TempSmall>
          </View>
        </Col>
      </Row>
    </CardItem>
  );
};

const CardItem = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: -10px;
  flex-wrap: wrap;
`;
const Col = styled.View`
  flex: 1 0 0%;
  width: 100%;
  max-width: 100%;
  padding-left: 10px;
`;
const Date = styled.Text`
  font-size: 14px;
`;
const Temp = styled.Text`
  font-size: 30px;
`;
const TempSmall = styled.Text`
  font-size: 22px;
`;
