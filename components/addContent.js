
import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, ScrollView } from 'react-native';

import { addContent } from '../store/contentList'
import styles from '../styles';
import { typeAlias } from '@babel/types';

class AddContent extends React.Component {

    constructor() {
        super();
        this.state = {
            url: 'enter a url to save here',
            title: '',
            text: '',
            mainPic: ''
        }
    }

    async scrape () {
        try {
            const result = await fetch(this.state.url, {
                method: 'GET',
    
            });
            console.log(await result.text())
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {

        return (
            <View style={styles.readingContainer}>

             <TextInput  style={{height: 40}}
                onChangeText={(url) => this.setState({url})}
                value={this.state.url}
                onSubmitEditing={ () => this.scrape()} />

            <ScrollView>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{this.state.title}</Text>
                </View>
                <View style={styles.text}>
                    <Text>{this.state.text}</Text>
                </View>
            </ScrollView>
            
            </View>
        )
    }
}

const mapDispatch = dispatch => ({
    addContent: content => dispatch(addContent(content))
})

export default connect(null, mapDispatch)(AddContent);