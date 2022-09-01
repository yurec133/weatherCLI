import React, {useEffect} from 'react';
import {StatusBar, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherRequest} from '../redux/action';
import {Loading} from '../components/Loading';
import {InitialStateType} from '../redux/reducer';
import {Container} from '../components/Container';
import {CurrentWeather} from '../components/CurrentWeather';
import {WeatherList} from '../components/WeatherList';

interface Props {
  navigation: any;
}
export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {isLoading} = useSelector((state: InitialStateType) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherRequest());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/img/bg-background.jpg')}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
      }}>
      <Container>
        <CurrentWeather />
        <WeatherList navigation={navigation} />
      </Container>
      <StatusBar />
    </ImageBackground>
  );
};
