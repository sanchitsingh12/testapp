import { ScrollView, StyleSheet, Text, View} from 'react-native'

import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Netflix</Text>
        </View>
      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        padding: 8
    },
    card: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 15,
        fontWeight: 'bold',
        width: 100,
        height:100,
        borderRadius: 4,
        margin: 8

    },
    cardElevated:{
   backgroundColor: '#CAD5E2',
   elevation: 4,
   shadowOffset: {
       width:1,
       height:1
   },
   shadowColor: '#333',
   shadowOpacity: 0.4,
   shadowRadius: 2
    }
})