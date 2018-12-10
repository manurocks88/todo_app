import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class Flexbox extends React.Component{
    render(){
            
        return(
            <ScrollView>
                <View style = {styles.container1} />
            </ScrollView>
        );
    
    }
}

const styles = StyleSheet.create({
    
    container1: {
        padding: 100,
        backgroundColor:'blue',
    },  
});

export default Flexbox;