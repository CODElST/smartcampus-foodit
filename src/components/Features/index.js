import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import CustomFloatingButton from "../common/CustomButton";
import features from "../../utils/features";
import { LOGIN } from "../../constants/routeNames";
import color from "../../assets/theme/color";

const windowWidth = Dimensions.get("window").width;

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
        <Text style={styles.Title}>{item.title}</Text>
        <Text style={styles.Subtitle}>{item.text}</Text>
      </View>
    </View>
  );
}

const Features = () => {
  let carousel = React.useRef();
  const [index, setIndex] = React.useState(0);
  const { navigate } = useNavigation();

  function pagination() {
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={index}
        containerStyle={styles.containerStyle}
        dotStyle={styles.paginationDotStyle}
        inactiveDotStyle={styles.paginationInactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={0.9}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      <Carousel
        data={features}
        ref={carousel}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={renderItem}
        layout={"default"}
        onSnapToItem={(index) => setIndex(index)}
      />

      {pagination()}
      <View style={styles.navigation}>
        <Text style={styles.skip} onPress={() => navigate(LOGIN)}>
          Skip
        </Text>
        <CustomFloatingButton
          primary
          title={
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={color.secondary}
            />
          }
          onPress={() => {
            index !== 2
              ? (carousel.current.snapToNext(),
                setIndex(carousel.current.currentIndex))
              : navigate(LOGIN);
          }}
        />
      </View>
    </View>
  );
};

export default Features;
