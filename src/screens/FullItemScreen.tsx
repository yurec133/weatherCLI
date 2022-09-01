import React from 'react';
import {Image, View} from 'react-native';
import {Container} from '../components/Container';
import styled from 'styled-components/native';
import {getIconsWeather} from '../utils';
interface Props {
  route: any;
}
export const FullItemScreen: React.FC<Props> = ({
  route: {
    params: {item},
  },
}) => {
  const {
    dt_txt,
    main: {temp, humidity, pressure},
    weather: {
      0: {icon, description},
    },
  } = item;
  // @ts-ignore
  return (
    <Wrapper>
      <Container>
        <BorderRow>
          <Row>
            <Col>
              <Info>{dt_txt}</Info>
            </Col>
            <Col>
              <View style={{flexDirection: 'row'}}>
                <Temp>{Math.round(temp)}</Temp>
                <TempSmall>°C</TempSmall>
              </View>
            </Col>
            <Col>
              <Image
                style={{width: 60, height: 60}}
                source={getIconsWeather(icon)}
              />
            </Col>
          </Row>
        </BorderRow>
        <BorderRow>
          <Row>
            <Col>
              <Info>{description}</Info>
            </Col>
            <Col>
              <Info>Humidity {humidity}%</Info>
            </Col>
            <Col>
              <Info>{pressure} hPa</Info>
            </Col>
          </Row>
        </BorderRow>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.View`
  background: #0d374d;
  flex: 1;
  padding: 20px 0;
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
const BorderRow = styled.View`
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
`;
const Info = styled.Text`
  font-size: 14px;
  color: #fff;
`;
const Temp = styled.Text`
  font-size: 30px;
  color: #fff;
`;
const TempSmall = styled.Text`
  font-size: 22px;
  color: #fff;
`;
