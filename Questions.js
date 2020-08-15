import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function questionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      const questionData = [ 
{ 
	question: 
	"What is the biggest planet in solar system", 
	answers: ["Venus", "Mars", "The Sun"], 
	correct: "The Sun", 
	questionId: "001"
}, 
{ 
	question: 
	"Are dogs herbivor?", 
	answers: ["True", "False"], 
	correct: "False", 
	questionId: "002"
}, 
{ 
	question: 
	"The highest mountain on Earth?", 
	answers: ["Mount Kinabalu", "Mount Fiji", "Mount Everest"], 
	correct: "Mount Everest", 
	questionId: "003"
}, 
{ 
	question: 
	"What is the part of bones that protects our brain?", 
	answers: ["Temple", "Ribs", "Chin", "Skull"], 
	correct: "Skull", 
	questionId: "004"
}, 
{ 
	question: 
	"What is the normal temperature for human body?", 
	answers: [ "39.0c", "37.0c", "32.0c"], 
	correct: "37.0c", 
	questionId: "005"
}, 
{ 
	question: 
	"What is the biggest organ in human body?", 
	answers: ["Skin", "Heart", "Brain",], 
	correct: "Skin", 
	questionId: "006"
}, 
{ 
	question: 
	"How many lungs does human have?", 
	answers: ["2", "4", "3",], 
	correct: "2", 
	questionId: "007"
}, 
{ 
	question: 
	"What is the fastest animal in the world?", 
	answers: ["Eagle", "tiger", "Cheetah",], 
	correct: "Cheetah", 
	questionId: "008"
}, 
{ 
	question: 
	"What is the largest animal in the world?", 
	answers: ["Elephant", "Whale", "Moose",], 
	correct: "Whale", 
	questionId: "009"
}, 
{ 
	question: 
	"Butterflies has a pair of wings", 
	answers: ["True", "False"], 
	correct: "True", 
	questionId: "010"
}, 
    </View>
    // n = 5 to export 5 question 
export default (n = 5) =>
Promise.resolve(questionData.sort(() => 0.5 - Math.random()).slice(0, n)); 
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component= {questionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;