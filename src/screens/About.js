import React from "react";
import {ScrollView,useWindowDimensions, View, Image } from "react-native";
import RenderHTML from "react-native-render-html";
import Styles from '../config/Styles'


const About = () =>{
    const {height, width} = useWindowDimensions();
    const source = {
        html: `<p style="font-size: 1.2rem; padding: 0 10px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. 
      </p>
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      
      <p style="color: purple; padding: 0 10px;">
        Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p><p style="color: purple; padding: 0 10px;">
      Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
        </p>`
      };
    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={{width:'100%',paddingVertical:30, paddingHorizontal:30, flex:1}}>
                <Image source={require('../../assets/gym.png')} resizeMode="contain" style={Styles.PageLogo}/>
                <RenderHTML 
                    contentWidth={width}
                    source={source}                    
                    enableExperimentalMarginCollapsing={true}
                />
            </View>
        </ScrollView>
    )
}

export default About;