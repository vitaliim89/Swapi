import { AppLoading } from 'expo';
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Swapi } from 'swapi';
import { People } from 'swapi/dist/typescript/models/People';
import styles from './styles';

const Home: React.FC = () => {
  const [people, setPeople] = useState<People[]>([])
  const [isLoading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    const getPeople = async() => {
      const swapi = new Swapi();
      setLoading(true);
      let result = await swapi.getAllPeople();
      console.log('All People', result.data?.results || []);
      setPeople(result.data?.results || []);
      setLoading(false);
    };

    getPeople();
  }, [])

  if (isLoading) {
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flex}
        data={people}
        renderItem={({ item }) => {
          return (
            <View style={styles.rowContainer}>
              <Text>
                {`name: ${item.name}`}
              </Text>
              <Text>
                {`height: ${item.height}`}
              </Text>
              <Text>
                {`mass: ${item.mass}`}
              </Text>
              <Text>
                {`hair_color: ${item.hair_color}`}
              </Text>
              <Text>
                {`skin_color: ${item.skin_color}`}
              </Text>
              <Text>
                {'...'}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Home;
