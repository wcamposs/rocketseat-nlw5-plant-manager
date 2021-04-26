// libraries
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

// js
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// img
import userImage from '../../assets/will.png';

export function Header() {

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greetings}>Olá</Text>
                <Text style={styles.userName}>Willian</Text>
            </View>

            <Image 
                source={userImage}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    greetings: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
});