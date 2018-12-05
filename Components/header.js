import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//THis is a stateless functional component
//const Header = (props) => <Text> {props.textIwant} </Text>

//This is a stateful functional component
class Header extends React.Component {

    constructor(props)  {  // Set state up
        super(props); //Run state
        this.textIwant = props.textIwant;
        //How we create state
        this.state = {
            number: 0
        };
        
        this.addNumberWhenPressed = this.addNumberWhenPressed.bind(this);
    }

    componentDidUpdate(){
        console.log(this.state.number);
    }

    addNumberWhenPressed(){
        const previousNumber = this.state.number;
        this.setState({
            number:previousNumber + 1
        });
    }

    render() {
            return (
                <Text onPress={this.addNumberWhenPressed}> {this.textIwant} </Text>
            );
    }
}
export default Header;