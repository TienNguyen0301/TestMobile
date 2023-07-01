import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '',
      height: 80,
    },
    logo: {
      height: 60,
      width: 60,
      marginLeft: 10,
    },
    flexHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 50,
        width: 60,
        height: 60,
    }

  });
  

const Header = () => {
    return (
      <View style={styles.container, styles.flexHeader}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
        <View style={styles.flexHeader}>
            <View>
                <Text>Handicrafted by</Text>
                <Text>Tien HLS</Text>
            </View>
            <Image style={styles.avatar} source={require('../assets/images/avt.jpg')}/>
        </View>
      </View>
    );
  };
  
export default Header;
