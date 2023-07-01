/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';


function App(): JSX.Element {

  const jokes = [
    "A child asked his father, \"How were people born?\" So his father said, \"Adam and Eve made babies, then their babies became adults and made babies, and so on.The child then went to his mother, asked her the same question and she told him, \"We were monkeys then we evolved to become like we are now.\"The child ran back to his father and said, \"You lied to me!\" His father replied, \"No, your mom was talking about her side of the family.\"",
    "Teacher: \"Kids,what does the chicken give you?\" Student: \"Meat!\" Teacher: \"Very good! Now what does the pig give you?\" Student: \"Bacon!\" Teacher: \"Great! And what does the fat cow give you?\" Student: \"Homework!\"",
    "The teacher asked Jimmy, \"Why is your cat at school today Jimmy?\" Jimmy replied crying, \"Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'\"",
    "A housewife, an accountant and a lawyer were asked \"How much is 2+2?\" The housewife replies: \"Four!\". The accountant says: \"I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time.\" The lawyer pulls the drapes, dims the lights and asks in a hushed voice, \"How much do you want it to be?\"",
  ];

  const styles = StyleSheet.create({
    container: {
      height: 250,
      margin: 25,

    },
    text: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center'   
    },
    textBold: {
        fontSize: 20,
        color: '#FFFFFF', 
        textAlign: 'center', 
        marginBottom: 15,
        fontWeight: 'bold'  

    },
    btnFunny: {
      backgroundColor: '#0000FF',
      width: 150
    },
    btnNotFunny: {
      backgroundColor: '#008000',
      width: 150
    },
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40
  },
  line: {
    backgroundColor: 'black',
    height: 1,

  },
  width80: {
    width: '80%',
  },
  lineCenter: {
    margin: 'auto',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  height80: {
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  }

  });

  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [funny, setFunny] = useState(0);
  const [disfunny, setDisFunny] = useState(0);
  const [isEndOfJokes, setIsEndOfJokes] = useState(false);


  const handleFunny = async () => {
    setFunny(funny + 1);
    showNextJoke();
  };

  const handleNotFunny = async () => {
    setDisFunny(disfunny + 1);
    showNextJoke();
  };

  const showNextJoke = () => {
    const nextIndex = currentJokeIndex + 1;

    if (nextIndex >= jokes.length) {
      setIsEndOfJokes(true);
    } else {
      setCurrentJokeIndex(nextIndex);
    }
  };
  
  

  return (
    <SafeAreaView>
      <Header />
      <Banner />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
           {isEndOfJokes ? (
            <View style={styles.height80}>
                <Text>That's all the jokes for today! Come back another day!</Text>
            </View>
    ) : (
      <>
        <View style={styles.container}>
            <View>
                <Text>{jokes[currentJokeIndex]}</Text>
            </View>
           <View style={styles.flex}>
              <View style={styles.btnFunny} >
                  <Button onPress={handleFunny} title='This is Funny!' />
                </View>
                <View style={styles.btnNotFunny} >
                  <Button onPress={handleNotFunny} title='This is not Funny.' />
                </View>
           </View>
        </View>
        </>
        )}
        <View style={styles.lineCenter}>
          <View style={styles.width80}>
            <Text style={styles.line}></Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
      <View style={styles.lineCenter}>
          <View style={styles.width80}>
            <Text style={styles.line}></Text>
          </View>
        </View>
    </SafeAreaView>
  );
}



export default App;
