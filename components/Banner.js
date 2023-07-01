import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#008000',
      height: 120,
      marginTop: 10,
      lineHeight: 120
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
    center: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
  });
  

const Banner = () => {
    return (
      <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.textBold}>A joke a day keeps the doctor away</Text>
                <Text style={styles.text}>If you joke wrong way, your teeth have to pay. (Serious)</Text>
            </View>
        </View>
    );
  };
  
export default Banner;
