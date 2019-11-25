import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from '../../styles';

const articles = [
    {title: 'More Powerful Batteries Make This a True Electric Car Race'},
    {title: 'More Powerful Batteries Make This a True Electric Car Race'},
    {title: 'More Powerful Batteries Make This a True Electric Car Race'}
];

const AllArticles = props => {
    return (
        <View>
            {articles.map(article => {
                return (
                    <Text>{article.title}</Text>
                )
            })}
        </View>
    )
}

export default AllArticles;