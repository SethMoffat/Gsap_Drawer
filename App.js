import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {gsap, Power2, Elastic, AutoKillTweens} from 'gsap-rn';


let drawerIsOpen = true
export default class Main extends Component {
    boxes = [];

    onPress(){
        
	AutoKillTweens.tweensOf(this.tl);
    this.tl = gsap.timeline();
        
        this.tl.to(this.boxes, {duration:.05, transform:{x:0, scale:1 }});
        this.tl.to(this.boxes, {duration:1, transform:{x:-200, scale:1 }});

    if (drawerIsOpen === true){
        drawerIsOpen === false

        gsap.timeline();
    }
    else if (drawerIsOpen === false){
        
        gsap.timeline.reverse();
        
        
        drawerIsOpen === true
    }
    }

    render() {
        return (
		<View style={{flex:1, justifyContent:"center"}}>
			
			<AutoKillTweens tweens={this} />
			<View style={{flexDirection:"row"}}>
			    <View ref={ ref=>this.boxes.push(ref) } style={styles.box} >
            <Button title="Screen 1" />
            <Button title="Screen 2" />
            <Button title="Screen 3" />
            </View>
          
			    <Text ref={ref=>this.text = ref} style={[styles.button, {marginTop: 85}]} onPress={this.onPress.bind(this)}> Change Screen </Text>
			
		    </View>
            <View style={{width: "100%",}}>

            </View>

          </View>
        );
    }
}


const styles = StyleSheet.create({
    box:{width:175, height:850, backgroundColor: "#FAB9FF", marginHorizontal:4, marginTop: 84, X: 0},
    button:{fontSize:12,height:40, width:80, backgroundColor: "#337ab7", paddingVertical:5, paddingHorizontal:15, color:"#FFF", borderRadius:5, justifyContent:'center'}
})