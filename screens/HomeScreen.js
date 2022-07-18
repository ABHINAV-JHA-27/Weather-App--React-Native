import react, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
const img = require("../assets/bgImage.jpg");
import DateTime from '../components/DateTime';
import WeatherScroll from '../components/WeatherScroll';

const API_KEY = "93ac8bfc8e2cc7b904ec9fc3abdfd97d";

const HomeScreen = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                fetchData("40.7128", "-74.0060")
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            fetchData(location.coords.latitude, location.coords.longitude);
        })();
    }, [])

    const fetchData = (latitude, longitude) => {
        if (latitude && longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
                setData(data)
            })
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.background}>
                <SafeAreaView style={styles.SafeArea}>
                    <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />
                    <WeatherScroll weatherData={data.daily} />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
    },
    SafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0
    },
});