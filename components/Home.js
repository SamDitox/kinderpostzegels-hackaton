import React from 'react';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Child"
            onPress={() => this.props.navigation.navigate('Child')}
          />
          <Button
            title="Teacher"
            onPress={() => this.props.navigation.navigate('Teacher')}
          />
          <Button
            title="Buyer"
            onPress={() => this.props.navigation.navigate('Buyer')}
          />
        </View>
      );
    }
  }