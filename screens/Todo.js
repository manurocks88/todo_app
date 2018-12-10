import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Todo extends React.Component{
    render(){

        return(
            <View 
                style={{
                    flex: 1, 
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap'
                    }}>

                <View 
                    style={{
                        flex: 1,
                        backgroundColor: 'powderblue'
                    }}
                />


                <View 
                    style={{
                        flex: 1, 
                        backgroundColor: 'skyblue'
                    }} 
                />



                    <View 
                        style={{
                            flex: 1,
                            backgroundColor: 'steelblue'
                        }} 
                    />
            </View>

        );  
    }
}
export default Todo;
