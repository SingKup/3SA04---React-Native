import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <View style={{marginTop: 20}}>
                <Text>
                    <Text style={styles.big}>{props.temp}</Text>
                    <Text style={styles.medium}>°C</Text>
                </Text>
            </View>

            <Text style={styles.medium}>CelsiusMin: {props.CelsiusMin} °C</Text>
            <Text style={styles.medium}>CelsiusMax: {props.CelsiusMax} °C</Text>
            <Text style={styles.medium}>WindSpeed: {props.WindSpeed} m/s</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    center: {        
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    big: {
        alignItems: 'center',
        marginTop: 20,
        fontSize: 30,
        color: 'white',
    },
    medium: {
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    }
})