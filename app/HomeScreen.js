import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const goToItem = () => {
    navigation.navigate('ItemScreen');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Text>Home Screen</Text>
      
      <Button title="Go to Item" testID='goToItem' onPress={goToItem} />

      <Button title="Show Modal" testID='modalButton' onPress={toggleModal} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
        testID='modal'
      >
        <View style={styles.modalContainer} testID='modalContainer'>
          <View style={styles.modalView}>
            <Text>This is a modal!</Text>
            <Button title="Close Modal" testID='closeModalButton' onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen;
