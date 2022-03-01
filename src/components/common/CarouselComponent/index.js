import { View, Text, Image } from "react-native";
import React from "react";

import Carousel from "react-native-snap-carousel";

import styles from "./styles";
import { windowWidth } from "../../../constants/window";
import Title from "../Text/Title";
import BodyText from "../Text/BodyText";

function renderItem({ item, index }) {
  return (
    <View style={styles.renderItem}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <BodyText primary content={item.title} style={styles.content} />
      </View>
    </View>
  );
}

const CarouselComponent = ({ data }) => {
  let carousel = React.useRef();

  return (
    <View>
      <Carousel
        data={data}
        ref={carousel}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.7}
        renderItem={renderItem}
        activeSlideAlignment="start"
      />
    </View>
  );
};

export default CarouselComponent;
