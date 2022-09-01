import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';
import {formatDate, getIconsWeather} from '../utils';
import {useSelector} from 'react-redux';
import {InitialStateType} from '../redux/reducer';
import {Card} from './Card';

export const CurrentWeather: React.FC = () => {
  const {weather, isLoading} = useSelector((state: InitialStateType) => state);
  if (isLoading) {
    return null;
  }
  const {
    list,
    city: {name},
  } = weather;
  const {
    main: {temp},
    weather: {
      0: {icon},
    },
    dt,
  } = list?.[0];

  return (
    <Card>
      <Row>
        <Col>
          <Date>{formatDate(dt)}</Date>
          <CityName>{name}</CityName>
        </Col>
        <Col>
          <View style={{flexDirection: 'row'}}>
            <Temp>{Math.round(temp)}</Temp>
            <TempSmall>°C</TempSmall>
          </View>
        </Col>
        <Col>
          <Image source={getIconsWeather(icon)} />
        </Col>
      </Row>
    </Card>
  );
};
const CityName = styled.Text`
  color: #fff;
  font-size: 38px;
  font-family: Futuram;
`;
const Temp = styled.Text`
  font-size: 60px;
  color: #fff;
  font-family: CaviarDreams;
`;
const TempSmall = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: CaviarDreams;
`;
const Date = styled.Text`
  font-size: 14px;
  color: #fff;
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
