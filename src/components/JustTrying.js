import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

class JustTrying extends Component {
    render(){
        const data=[
            {
                id: 1,
                name: 'Adonay',
                phone: '+251932207260',
                color: 'red'
            },
            {
                id:2,
                name: 'Raymund',
                phone: '+251932207260',
                color: 'gray'
            },
            {
                id:3,
                name: 'Eshe',
                phone: '+251932207260',
                color: 'green'
            },
            {
                id:4,
                name: 'Abe',
                phone: '+251932207260',
                color: 'blue'
            }

        ];
        
        const i=0;

        return (
            <View style={styles.viewStyle}>
                <View style={styles.sectionView}>
                        <Text style={styles.textStyle}> Hello Adonay. </Text>
                </View>
                <View style={styles.sectionView}>
                        <Text  style={styles.textStyle}> This is your contact list. </Text>
                </View>
                <View style={{
                    backgroundColor: 'yellow',
                    height:220,
                    margin: 20
                }}>
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={({item})=>{
                            return (
                                <View
                                    style={{
                                        marginTop: 30,
                                        paddingLeft: 10
                                    }}
                                >
                                    <View style={{
                                        flex:1,
                                        alignItems:'center',
                                        padding: 10
                                    }}>
                                        <View style={{
                                            height: 100,
                                            width: 200,
                                            backgroundColor: item.color,
                                            marginBottom:10
                                        }}></View>
                                        <Text style={{fontSize: 18}}>{item.name}</Text>
                                        <Text style={{fontSize: 15}}>{item.phone}</Text>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={item=> item.id}
                    />

                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.i++;
                        console.log(this.i);
                    }}>
                        <View
                            style={{
                                height: 200,
                                width: 400,
                                backgroundColor: data[this.i].color,
                                margin:10,
                                alignItems: 'center',
                                justifyContent:'center'
                            }}
                        >
                            <Text style={{fontSize: 20}}>{data[this.i].name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    };
}

const styles={
    viewStyle:{
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        flexDirection: 'column',

    },
    sectionView:{
        height: 30,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 10,
        backgroundColor: 'yellow',
        alignSelf: 'center'
    },
    textStyle:{
        fontSize: 20,
        color: 'blue',
        paddingLeft: 10,
        paddingRight:10
    }
}

export default JustTrying;