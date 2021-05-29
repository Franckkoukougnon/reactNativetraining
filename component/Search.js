import React from 'react'
import {StyleSheet, View, Button, TextInput } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'yellow', justifyContent:'center', alignItems: 'center' }}>              
                <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
                <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
                <View style={{height: 50, width:50,  backgroundColor: 'blue'}}></View>
            </View>
            
            
        )
    }
    
}

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
     button: {
        height: 50

    },
    view: {
       marginTop : 20  
     }
    
})

export default Search