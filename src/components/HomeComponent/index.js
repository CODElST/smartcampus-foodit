import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";
import Container from "../common/Container";
import Title from "../common/Text/Title";
import CarouselComponent from "../common/CarouselComponent";
import features from "../../utils/features";

const HomeComponent = () => {
  return (
    <Container>
      <View>
        <Title secondary title={"Restaurents for you"} />
        <CarouselComponent data={features} />
      </View>
      <View>
        <Title secondary title={"Foods you might like"} />
        <CarouselComponent data={features} />
      </View>
    </Container>
  );
};

export default HomeComponent;
