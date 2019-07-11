import React from 'react';
import { AppRegistry, View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header';

const App = () => (
    <View>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
