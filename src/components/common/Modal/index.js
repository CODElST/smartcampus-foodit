import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";

import styles from "./styles";

const Index = ({
  visible,
  icon,
  title,
  button1,
  button1press,
  button2,
  button2press,
}) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalCenteredView}>
          <View style={styles.modalView}>
            {icon && <View style={styles.modalIconView}>{icon}</View>}
            <Text style={styles.modalText}>{title}</Text>
            <View style={styles.navigation}>
              <Pressable style={styles.button} onPress={button1press}>
                <Text style={[styles.textStyle, styles.button1]}>
                  {button1}
                </Text>
              </Pressable>
              <Pressable style={styles.button} onPress={button2press}>
                <Text style={[styles.textStyle, styles.button2]}>
                  {button2}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Index;
