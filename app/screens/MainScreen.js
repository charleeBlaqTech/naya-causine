import React from 'react';
import { StyleSheet,
    SafeAreaView,ImageBackground, View, Button, Image, Text
  } from 'react-native';

 

  
  const MainScreen  = () => {
    const handlePress=()=>{
        console.log('text clicked');
      }


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} resizeMode='cover' source={{ uri:"https://media.istockphoto.com/id/673294768/photo/blank-logo-sign-cafe-shop-front-display-brick-wall.jpg?b=1&s=170667a&w=0&k=20&c=8n-1VT2qNTKmHAVPjK-Cq4_Q4QxxGFuuk_r_9aNiuOA="}}>

                <View style={styles.logoImageContainer}>
                    <Image source={{width:100,height:100, uri: 'https://media.istockphoto.com/id/1477464704/photo/food-and-drink-sign.jpg?b=1&s=170667a&w=0&k=20&c=vAaA4iEz7xie4qAsiqIDmoa4YCz-2htdWMjDWSRgdeE='}}/>
                    <Text style={styles.logoTextStyle}>We will Bring your favourite to your door step.</Text>
                </View>

                <View style={styles.buttonContainerStyle}>
                    <Button style={styles.loginButtonStyle} title="sign in" />
                    <Button style={styles.registerButtonStyle} title="sign up" />
                </View>

            </ImageBackground>
        </SafeAreaView> 
    )
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems:"center"
    },
    buttonContainerStyle:{
        width: "100%",
        paddingBottom:30
    },
    loginButtonStyle:{
        width: "100%",
        height: 70,
        backgroundColor:'#fc5c65'
    },
    registerButtonStyle:{
        width: "100%",
        height: 70,
        backgroundColor:'#4ecdc4'
    },
    logoImageContainer:{
        position: "absolute",
        top:55,
        alignItems: 'center'
    },
    logoTextStyle:{
        fontSize:20,
        textAlign: 'center',
        color: "#000"
    }
  
  });





  
  export default MainScreen