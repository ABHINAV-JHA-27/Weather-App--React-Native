import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import WeatherItem from './WeatherItem';
import moment from 'moment-timezone'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTime = ({ current, lat, lon, timezone }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
            const minutes = time.getMinutes();
            const aMpM = hour >= 12 ? 'PM' : 'AM'

            setDate(days[day] + ', ' + date + ' ' + months[month]);
            setTime((hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + aMpM);

        }, 1000);

    }, [])

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>{time}</Text>
                </View>
                <View>
                    <Text style={styles.subHeading}>{date}</Text>
                </View>
                <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Humidity" value={current ? current.humidity : ""} unit="%" />
                    <WeatherItem title="Pressure" value={current ? current.pressure : ""} unit="hPA" />
                    <WeatherItem title="Sunrise" value={current ? moment.tz(current.sunrise * 1000, timezone).format('HH:mm') : ""} unit="AM" />
                    <WeatherItem title="Sunset" value={current ? moment.tz(current.sunset * 1000, timezone).format('HH:mm') : ""} unit="PM" />
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.timeZone}>{timezone}</Text>
                <Text style={styles.latLong}>{lat}N {lon}E</Text>
            </View>
        </View>
    );
}

export default DateTime;

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    heading: {
        fontSize: 40,
        fontWeight: "100",
        // color: "white",
    },
    subHeading: {
        fontSize: 25,
        fontWeight: "300",
        // color: "white",
    },
    latLong: {
        textAlign: 'right',
        fontSize: 16,
        fontWeight: "700",
        // color: "white",
    },
    timeZone: {
        textAlign: 'right',
        fontSize: 20,
        // color: "white",
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        padding: 10,
        borderRadius: 12,
        marginTop: 10,
    },
});