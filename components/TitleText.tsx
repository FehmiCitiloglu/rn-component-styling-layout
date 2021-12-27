import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props {
    children?: React.ReactNode,
    style?: Object
}

const TitleText = (props: Props) => {
    return (
            <Text style={{...styles.title, ...props.style }}>{props.children}</Text>
    )
}

export default TitleText

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
})
