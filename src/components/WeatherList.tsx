import React from 'react';
import {useSelector} from 'react-redux';
import {InitialStateType} from '../redux/reducer';
import {FlatList, TouchableOpacity} from 'react-native';
import {Card} from './Card';
import {WeatherItem} from './WeatherItem';
import {uniqueItem} from '../utils';

interface Props {
  navigation: any;
}
export const WeatherList: React.FC<Props> = ({navigation}) => {
  const {isLoading, weather} = useSelector((state: InitialStateType) => state);
  if (isLoading) {
    return null;
  }
  const {list} = weather;
  return (
    <Card style={{flex: 1}}>
      <FlatList
        data={list && uniqueItem(list)}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FullItem', {item})}>
            <WeatherItem item={item} isLoading={isLoading} />
          </TouchableOpacity>
        )}
      />
    </Card>
  );
};
