// imports 
import React from 'react';
import { Text, View } from 'react-native';

// make a component 

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.9,
        elevation: 10,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// make component available
export default Header;
