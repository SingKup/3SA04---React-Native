import React from 'react';
import { View, Text } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text style={styles.big}>{props.temp}</Text>
                <Text style={styles.medium}>°C</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    center: {
        justifyContent: 'center' ,
        alignItems: 'center' ,
        
    }
    big: {
        fontSize: 30,
        color: 'white',
    },
    medium: {
        fontSize: 15,
        color: 'white',
    }
})