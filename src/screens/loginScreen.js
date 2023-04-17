import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
// import HomeScreen from './HomeScreen';
import {useDispatch} from 'react-redux';
import setUser from '../Redux/action/actionCreator';
const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const handleNavigation = () => {
    dispatch(setUser({username: username}));

    navigation.navigate('HomeScreen');
  };

  const [username, setUsername] = useState('');

  return (
    <View style={styles.heading}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#240922',
            fontSize: 25,
          }}>
          LOGIN
        </Text>
        <TextInput
          style={styles.input}
          placeholder={'userName'}
          placeholderTextColor={'#003f5c'}
          onChangeText={(value) => {
            setUsername(value);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          placeholderTextColor={'#003f5c'}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button onPress={handleNavigation} title={'Login'} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
  },

  heading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd1d1',
  },
});
