import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native'
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/ElevatedCards';
import Fancycard from './components/Fancycard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App(){
 return (
  <SafeAreaView>
  <ScrollView>
    <Flatcards />
    <ElevatedCards />
    <Fancycard />
    <ActionCard />
    <ContactList />
  </ScrollView>
</SafeAreaView>
 )
}

export default App;

