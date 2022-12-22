
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './bg';
import Btn from './Button';
import { darkGreen, green } from '../Constant';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 20, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 30 }}>Welcome to Successive Family!</Text>
      <View style={{ marginVertical: 300 }}>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}></Text>
      <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
