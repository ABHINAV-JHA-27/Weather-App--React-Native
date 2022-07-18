import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CurrentTempEL from './CurrentTempEL';
import FutureForcast from './FutureForcast';
import moment from 'moment-timezone'

const WeatherScroll = ({ weatherData }) => {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <CurrentTempEL data={weatherData && weatherData.length > 0 ? weatherData[0] : {}} />
            <FutureForcast data={weatherData} />
        </ScrollView>
    );
}

export default WeatherScroll;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#18181b99",
        padding: 30,
        flex: 0.4,
    },
});