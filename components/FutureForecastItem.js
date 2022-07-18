import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import moment from 'moment-timezone'

const FutureForecastItem = ({ forecastItem }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.day} >{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image source={{ uri: "http://openweathermap.org/img/wn/" + forecastItem.weather[0].icon + "@2x.png" }} style={styles.icon} />
            <Text style={styles.temp} >Night {forecastItem.temp.night}&#176; c</Text>
            <Text style={styles.temp} >Day {forecastItem.temp.day}&#176; c</Text>
        </View>
    );
}

export default FutureForecastItem;

const styles = StyleSheet.create({
    icon: {
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#00000077",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 20,
        marginLeft: 12,
    },
    day: {
        fontSize: 20,
        color: 'white',
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign: 'center',
        borderRadius: 18,
        fontWeight: '300',
        marginBottom: 15,
        overflow: 'hidden'
    },
    temp: {
        fontSize: 16,
        color: 'white',
        fontWeight: '200',
        textAlign: 'center',
    },
});