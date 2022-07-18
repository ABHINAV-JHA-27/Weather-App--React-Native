import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import moment from 'moment-timezone'

const CurrentTempEL = ({ data }) => {
    if (data && data.weather) {
        return (
            <View style={styles.currentTempContainer}>
                <Image source={{ uri: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png' }} style={styles.icon} />
                <View style={styles.otherContainer}>
                    <Text style={styles.day} >{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text style={styles.temp} >Night {data.temp.night}&#176; c</Text>
                    <Text style={styles.temp} >Day {data.temp.day}&#176; c</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View>

            </View>

        )

    }
}

export default CurrentTempEL;

const styles = StyleSheet.create({
    icon: {
        width: 150,
        height: 150,
    },
    currentTempContainer: {
        backgroundColor: "#00000077",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'white',
        padding: 15,
    },
    otherContainer: {
        paddingRight: 40,
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