import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import colors from '../constants/colors';
import TitleText from './TitleText';

interface Props {
    title: string
}

const Header = (props: Props) => { 
    return(
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText>
        </View>
    )
 }


  const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },

  })

  export default Header