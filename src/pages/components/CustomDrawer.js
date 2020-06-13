import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

function CustomDrawer({...props}){
    return (
        <View>
            <Image 
            source={require('../../../assets/CCR-696x522.jpg')}
            style={styles.imagem}/>
            <DrawerNavigatorItems {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem:{
        width:280,
        height:150
    }
})


export default CustomDrawer;