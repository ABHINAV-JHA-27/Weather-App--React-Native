import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FutureForecastItem from './FutureForecastItem';
import moment from 'moment-timezone'

const FutureForcast = ({ data }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                data && data.length > 0 ?

                    data.map((data, idx) => (

                        idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
                    ))

                    :

                    <View />
            }
        </View>
    );
}

export default FutureForcast;

const styles = StyleSheet.create({});