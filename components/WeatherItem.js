import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WeatherItem = ({ title, value, unit }) => {
    return (
        <View style={styles.items}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}{unit}</Text>
        </View>
    );
}

export default WeatherItem;

const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 3,
    },
    title: {
        fontSize: 14,
        fontWeight: "100",
        color: "white",
    },
    value: {
        fontSize: 14,
        fontWeight: "100",
        color: "white",
    },
});