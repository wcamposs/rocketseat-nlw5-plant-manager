// libraries
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

// js
import colors from '../styles/colors';

// interface
interface ButtonProps extends TouchableOpacityProps {
    title: String,
}

export function Button(props: ButtonProps) {
    const { title, ...rest } = props;
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    },
});