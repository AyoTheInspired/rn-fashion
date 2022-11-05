import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slide, { SLIDE_HEIGHT } from "../components/Slide";
import Animated from "react-native-reanimated";
// import { useValue } from "react-native-redash";

type Props = {};

const { width, height } = Dimensions.get("window");

const Onboarding = (props: Props) => {
	// const onScroll = onScrollEvent({ x });

	const slides = [
		{ label: "Relaxed", bgColor: "#bfeaf5" },
		{ label: "Playful", bgColor: "#beecc4" },
		{ label: "Excentric", bgColor: "#FFE4D9" },
		{ label: "Funky", bgColor: "#FFDDDD" },
	];

	return (
		<View style={styles.container}>
			<View style={[styles.slider]}>
				<Animated.ScrollView
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}>
					{slides.map(({ label, bgColor }, idx) => (
						<Slide
							right={!!(idx % 2)}
							key={idx}
							label={label}
							bgColor={bgColor}
						/>
					))}
				</Animated.ScrollView>
			</View>
			<View style={styles.footer}>
				<View
					style={{
						...StyleSheet.absoluteFillObject,
						backgroundColor: "transparent",
					}}
				/>

				<View
					style={{
						flex: 1,
						backgroundColor: "white",
						borderTopLeftRadius: 75,
					}}></View>
			</View>
		</View>
	);
};

export default Onboarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},

	slider: {
		height: SLIDE_HEIGHT,
		backgroundColor: "cyan",
		borderBottomRightRadius: 75,
	},

	footer: {
		flex: 1,
	},
});
