import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export interface ICardProps {
    children: React.ReactNode
    style?: {},
}

export default function Card (props: ICardProps) {
  return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
  );
}


const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    },
    
})