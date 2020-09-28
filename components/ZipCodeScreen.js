import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.List}>
            <Text style={styles.Text}>{place}</Text>
            <Text style={styles.CodePos}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.BlackImage}>
            <ImageBackground source={require('../bg.jpg')} style={styles.BackDrop}> 
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    List: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Text: {
        fontSize: 30,
        color: 'black',
    },
    CodePos: {
        fontSize: 30,
        color: 'black',
    },
    BackDrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    BlackImage: {
        width: '100%',
    }
})