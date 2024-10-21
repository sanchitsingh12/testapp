import React from 'react'

import {
View,
Text,
StyleSheet,
useColorScheme
} from 'react-native' 


function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

return(
    <View style={styles.container}>
        <Text>
             Hello World !</Text>
    </View>
)
} 

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AppPro 