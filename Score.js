import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';

const scienceQuiz = [
      {names: 'Jackson',
       scores: 1},
      {names: 'Billy',
       scores: 2},
      {names: 'Eilish',
       scores: 3},
      {names: 'Hugh',
       scores: 4},
      {names: 'Jimmy',
       scores: 5},
      {names: 'Odin',
       scores: 6},
      {names: 'Chris',
       scores: 7},
      {names: 'Hemsworth',
       scores: 8},
      {names: 'Robert',
       scores: 9},
      {names: 'Junior',
       scores: 10},
      ];

const artsQuiz = [
      {names: 'Jackson',
       scores: 1},
      {names: 'Billy',
       scores: 2},
      {names: 'Eilish',
       scores: 3},
      {names: 'Hugh',
       scores: 4},
      {names: 'Jimmy',
       scores: 5},
      {names: 'Odin',
       scores: 6},
      {names: 'Chris',
       scores: 7},
      {names: 'Hemsworth',
       scores: 8},
      {names: 'Robert',
       scores: 9},
      {names: 'Junior',
       scores: 10},
      ];

// Sorting the array according to score in ascending
var sorted = scienceQuiz.sort(function (a,b){
    return a.score - b.score;
  });
var sorted2 = artsQuiz.sort(function (a,b){
    return a.score - b.score;
  });


export default class App extends Component {

 render() {
    return (
      // Use SectionList component to display the ranking according to quiz category
      <SafeAreaView style={styles.container}>
       <SectionList
        sections={[
          { title: 'Science Quiz', data: scienceQuiz },
          { title: 'Arts Quiz', data: artsQuiz },
        ]}

        renderItem = {({ item }) => (
          <View style={styles.row}>
           <Text>{item.score}</Text>
          </View>
        )}

        renderSectionHeader = {({ section }) => (
          <View style={styles.SectionHeader}>
           <Text>{section.title}</Text>
          </View>
        )}

        keyExtractor={item => item.id}
       />
    );
  }
 }

 const styles = StyleSheet.create({
   
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})
