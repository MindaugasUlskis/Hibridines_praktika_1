
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';
import ButtonX from './components/Button';
import React, { useState } from 'react';

export default function App() {
  const [bgC1, setColor1] = useState('purple');
  const [bgC2, setColor2] = useState('purple');
  const [bgC3, setColor3] = useState('purple');
  const [bgC4, setColor4] = useState('purple');

  const clickHandler = (buttonColor, setColor) => {
    if (buttonColor == 'purple') {
      setColor('blue');
    } else {
      setColor('purple');
    }
  };
  

  return (
      <View style={[styles.container, {}]}>
        <View style={styles.top}>
        <View style={{flexDirection: 'column', alignItems:'flex-start' }}>
          <View style={{ flexDirection: 'row' }}>
          <ButtonX text='Button 1' onPress={() => clickHandler(bgC1, setColor1)} />
          <ButtonX text='Button 2' onPress={() => clickHandler(bgC2, setColor2)} />
          </View>
          </View>
          <View style={{ flexDirection: 'column', alignItems:'flex-start' }}>
          <View style={{ flexDirection: 'row' }}>
          <ButtonX text='Button 3' onPress={() => clickHandler(bgC3, setColor3)}/>
          <ButtonX text='Button 4' onPress={() => clickHandler(bgC4, setColor4)} />
          </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.boxContainer}>
              <Text style={[styles.boxText, { backgroundColor: bgC1 }]}>
                Box 1
              </Text>
          </View>
          <View style={styles.boxContainer}>
              <Text style={[styles.boxText, { backgroundColor: bgC2 }]}>
                Box 2
              </Text>
          </View>
          <View style={styles.boxContainer}>
              <Text style={[styles.boxText, { backgroundColor: bgC3 }]}>
                Box 3
              </Text>
          </View>
          <View style={styles.boxContainer}>
              <Text style={[styles.boxText, { backgroundColor: bgC4 }]}>
    
                Box 4
              </Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bottom: {
    flex: 0.5,
    backgroundColor: 'red',
    borderWidth: 10,
    borderTopWidth:0,
    borderColor: 'pink',
    alignItems: 'center'
  },
  top: {
    flex: 0.5,
    backgroundColor: 'green',
    borderWidth: 10,
    borderBottomWidth: 0,
    borderColor: 'pink',
    alignItems: 'space-around',
    justifyContent:'space-around',

  },
  boxText: {
    color:'#FFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18,
    textAlign: 'center',
    justifyContent:'center',
    paddingVertical:'8%',
    paddingHorizontal:'10%',

  },
  boxContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
