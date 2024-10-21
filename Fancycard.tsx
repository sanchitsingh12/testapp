import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Treanding Places </Text>
      <View style={[styles.card, styles.cardElavated]}>
          <Image
          source={{
            uri:'https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=tCHl7ajgA6dctUukx3UzrpTtzc-tvV2YKMwOtPrNB04='
          }}
          style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, 
                   Jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a place in the 
                city of Jaipur, India. Bulit from
                red and pink sandstone, it is on edge of the 
                City Palace.
            </Text>
            <Text style={styles.cardFooter}>12 mins away
            </Text>
          </View>
      </View>
      
      <Text style={styles.headingText}>Best place for tea</Text>
      <View style={[styles.jmdcard, styles.cardElavated]}>
          <Image
          source={{
            uri:'https://lh3.googleusercontent.com/p/AF1QipPkgg2alUW0Oju8mOgRlmO4-rz6RJmuPp9D8Pa4=s680-w680-h510'
          }}
          style={styles.jmdImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>JMD Cafe</Text>
            <Text style={styles.cardLabel}>Near Kale Hanuman ji Temple, opp. Shankar Misthan Bhandar, 
                Chandi Ki Taksal, J.D.A. Market, Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>They sell one of the nicest cup of tea i ever had in my life
            </Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
headingText: {
    fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
},
card:{
    width: 370,
    height:360,
    borderRadius:9,
    marginVertical:12,
    marginHorizontal:16
},
cardElavated:{
    backgroundColor:'#FFFDD0',
    borderRadius:5,
    elevation:3,
    shadowOffset:{
        width:1,
        height:1
    }
},
jmdcard:{
    width: 370,
    height:550,
    borderRadius:9,
    marginVertical:12,
    marginHorizontal:16
},
jmdImage:{
    height:380,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
},
cardImage:{
height:180,
marginBottom:8,
borderTopLeftRadius:6,
borderTopRightRadius:6
},
cardBody:{
    flex: 1,
    paddingHorizontal:12
},
cardTitle:{
    color: '#000000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:6
},
cardLabel:{
    color: '#EA425C',
    fontSize:16,
    marginBottom:6,
},
cardDescription:{
    color: '#E74292',
    fontSize:16,
    marginBottom:10,
    marginTop:6,
},
cardFooter:{
    color: '#F5BCBA'
}
})