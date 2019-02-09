import React from 'react';
import { Text, View } from 'react-native';
import { Thumbnail, Accordion } from 'native-base';

export default class Profile extends React.Component {
    state = {
        data: {
            image: {
                url: 'https://via.placeholder.com/300x300?text=...'
            }
        },
        dataArray: [],
    };

    static navigationOptions = {
        title: 'Personagem'
    }


    componentDidMount() {
        const id = this.props.navigation.getParam('id');

        fetch(`https://www.superheroapi.com/api.php/10216378608089852/${id}`)
            .then((response) => response.json())
            .then((data) => this.setState({
                data,
                dataArray: [
                    {title: "Nome", content: data.name},
                    {title: "Raça", content: data.appearance.race},
                    {title: "Poder", content: data.powerstats.power},
                ]
            }));
    }


    render() {
        const { data, dataArray } = this.state;
        return (
            <View>
                <Text>Profile</Text>
                <Thumbnail style={{
                     width: '50%', height: '50%' }} 
                     source={{ uri: data.image.url }}
                />

                <Accordion dataArray={dataArray} expanded={0}/>

            </View>
        );
    }
}