
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home/Index'
import Details from '../Screens/Details/Index'



export const Routes = () =>{

    const stack =createStackNavigator();

  
     
    return (
        
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name ='home' component = {Home} option = {
                    {
                        headerShown: false,
                    }
                }></stack.Screen>
                <stack.Screen name ='details' component = {Details} 
                ></stack.Screen>
              
                
            </stack.Navigator>
        </NavigationContainer>
      
      
 
 
        
      
    )
  }


