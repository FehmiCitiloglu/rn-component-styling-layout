import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

interface Props {
    style?: {},
}

const Input = ({style, ...props}: Props) => {
    return (
            <TextInput {...props} style={{...styles.input, ...style}}/>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})


export default Input
