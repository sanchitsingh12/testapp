import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Nikita Sharma',
          status: 'Friend',
          imageUrl: 'https://instagram.fjai8-1.fna.fbcdn.net/v/t51.2885-19/448488647_482845347656679_4790058506299404732_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjai8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=cb_tHUNcpY4Q7kNvgEuk62k&_nc_gid=d8e4c5d34d96496ca72f93abbf6f109b&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDMjSDz6mmH2BPikrvRCHPKs5IsQLV1lJB7TNcV2i9NxA&oe=671B2DA9&_nc_sid=7a9f4b',
        },
        {
          uid: 2,
          name: 'Kartikey Sharma',
          status: 'Friend',
          imageUrl: 'https://instagram.fjai8-1.fna.fbcdn.net/v/t51.2885-19/412258484_1553508092137771_443639675620960502_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjai8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Gvysw7krKNkQ7kNvgHBnN2d&_nc_gid=353285764703432688b1a2b6a391e416&edm=AIhb9MIBAAAA&ccb=7-5&oh=00_AYDl9mLrKh6tZhYhBt6VMK7uzgiBmzmLRgWaxeKn1pbaCw&oe=671B5602&_nc_sid=8aafe2',
        },
        {
          uid: 3,
          name: 'Prashant Jangir',
          status: 'Friend',
          imageUrl: 'https://instagram.fjai8-1.fna.fbcdn.net/v/t51.2885-19/330641187_5912504672118153_4536689234663396008_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjai8-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GO6ue5767IoQ7kNvgGAEidi&_nc_gid=6ce4ced6a3694ff6a7df88d30ef6035d&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYAZ4wlz8AHRLX09wQwPS6U9dr29kP2QTFA4mcNxQy_piA&oe=671B46AC&_nc_sid=7a9f4b',
        },
        {
          uid: 4,
          name: 'Tanu Jaiswal',
          status: 'Friend',
          imageUrl: 'https://instagram.fjai8-1.fna.fbcdn.net/v/t51.2885-19/462700408_873335281598105_3676321310393524669_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjai8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=p2H-FcKEPj4Q7kNvgF9wJSO&_nc_gid=93077e0b40bc4a3cb482d49e8b22e573&edm=AGFyKLkBAAAA&ccb=7-5&oh=00_AYDmk8B9ujpydDnwkmN_FoiBqn_bMVTsbWYsKOGc8iLCZg&oe=671B3FA1&_nc_sid=5a0a6d',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#fcf3cf',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#273746'
    },
    userStatus: {
        fontSize: 16
    }
})