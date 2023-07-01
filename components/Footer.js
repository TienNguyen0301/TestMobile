import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
    //     flexDirection: 'column',
    // //   justifyContent: 'center',
    //   alignItems: 'flex-end'
    },
    textCenter: {
       textAlign: 'center'
    },
    viewCenter: {
        margin: 15
    },
    copyright:{
        marginTop: 10,
        fontSize: 15,
        textAlign: 'center',
    }
  });
  

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewCenter}>
                <Text style={styles.textCenter}>This appis created as part of Hlsolutions program. The materials con-tained on this website are provided for general information only and do not constitu any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the infor-mation contained on this site.</Text>
                <Text  style={styles.textCenter, styles.copyright}>Copyright 2021 HLS</Text>
            </View>
        </View>
    );
  };
  
export default Footer;
