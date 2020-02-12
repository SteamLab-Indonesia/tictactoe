import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Typography, TouchableOpacity} from 'react-native';

class TicTacToe extends Component{

    state = {
        player: 1,
        board:[
            ['','',''],
            ['','',''],
            ['','','']
        ]
    }

    setBox = () => {
        player = this.state.player;
        if (player==1){
            this.setState({player: 2})
            alert('player 2s turn')
        }
        else if (player==2){
            this.setState({player: 1})
            alert('player 1s turn')
        }
        else{
            alert('error')
        }
    }

    render(){
        console.log(this.state.board)
    return(
        <View style={styles.container}>
            <View style={styles.playerbox}>
                <Text style={styles.playertext}>Player {this.state.player}'s turn</Text>
            </View>
            <View style={styles.boxarea}>
                
                {
                    this.state.board.map((item,index)=>{
                        return (
                            <View style={styles.boxrow}>
                                {
                                    item.map((column,columnIndex)=>{
                                        return (
                                        <TouchableOpacity style={styles.box} onPress={()=>this.setBox()}>
                                            <Text style={styles.box}>{column}</Text>
                                        </TouchableOpacity>
                                        );
                                    })
                                }
                                                        
                            </View>
                        )

                    })
                }
            </View>
        </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'yellow'
    },
    playerbox:{
        height:100,
        justifyContent: 'center',
        alignItems:'center'
    },
    playertext:{
        fontSize:16,
    },
    boxarea:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        // backgroundColor: 'cyan',
        width: '100%',
        height: 300
    },
    boxrow:{
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'row',
        // marginLeft:8,
        height: 100,
        flex: 1
    },
    box:{
        borderWidth: 1,
        width: 100,
        height: 100
    }
})

export default TicTacToe