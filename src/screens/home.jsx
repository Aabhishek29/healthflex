import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

const Home = ({props}) => {
    
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={styles("theme").container}>
            <ScrollView>
                <View>
                    <Text>Hello</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme == "dark" ? "#d8d8d8" : "#fff"
    }
})

export default Home;