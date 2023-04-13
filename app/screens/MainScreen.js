import React from 'react';
import { StyleSheet,
    SafeAreaView,ImageBackground, View, Button, Image, Text
  } from 'react-native';


import colors from "../config/colors"

 

  
  const MainScreen  = () => {
    const handlePress=()=>{
        console.log('text clicked');
      }


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} resizeMode='contain' source={{ uri:"https://media.istockphoto.com/id/673294768/photo/blank-logo-sign-cafe-shop-front-display-brick-wall.jpg?b=1&s=170667a&w=0&k=20&c=8n-1VT2qNTKmHAVPjK-Cq4_Q4QxxGFuuk_r_9aNiuOA="}}>

                <View style={styles.logoImageContainer}>
                    <Image source={{width:100,height:100, uri: 'https://media.istockphoto.com/id/1477464704/photo/food-and-drink-sign.jpg?b=1&s=170667a&w=0&k=20&c=vAaA4iEz7xie4qAsiqIDmoa4YCz-2htdWMjDWSRgdeE='}}/>
                    <Text style={styles.logoTextStyle}>We will Bring your favourite to your door step.</Text>
                </View>

                <View style={styles.buttonContainerStyle}>
                    <Button style={styles.loginButtonStyle} title="sign in" />
                </View>
                <View style={styles.buttonContainerStyle}>
                    <Button style={styles.registerButtonStyle} title="sign up" />
                </View>

            </ImageBackground>
        </SafeAreaView> 
    )
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.black,
    },
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems:"center",
        width:"100%",
        height:'100%'
    },
    buttonContainerStyle:{
        width: "80%",
        marginBottom:10
    },
    loginButtonStyle:{
        width: "100%",
        height: "100%",
        backgroundColor:colors.primary,
    },
    registerButtonStyle:{
        width: "100%",
        height: "100%",
        backgroundColor:colors.secondary,
    },
    logoImageContainer:{
        position: "absolute",
        top:55,
        alignItems: 'center'
    },
    logoTextStyle:{
        fontSize:20,
        textAlign: 'center',
        color: colors.white,
    }
  
  });





  
  export default MainScreen