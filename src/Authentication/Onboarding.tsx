import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slide, { SLIDE_HEIGHT } from "../components/Slide";
import Animated from "react-native-reanimated";
import SubSlide from "../components/SubSlide";
// import { useValue } from "react-native-redash";

type Props = {};

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const Onboarding = (props: Props) => {
	// const onScroll = onScrollEvent({ x });

	const slides = [
		{
			title: "Relaxed",
			bgColor: "#bfeaf5",
			subtitle: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet",
		},
		{
			title: "Playful",
			bgColor: "#beecc4",
			subtitle: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet",
		},
		{
			title: "Excentric",
			bgColor: "#FFE4D9",
			subtitle: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet",
		},
		{
			title: "Funky",
			bgColor: "#FFDDDD",
			subtitle: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet",
		},
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
					{slides.map(({ title, bgColor }, idx) => (
						<Slide
							right={!!(idx % 2)}
							key={idx}
							label={title}
							bgColor={bgColor}
						/>
					))}
				</Animated.ScrollView>
			</View>
			<View style={styles.footer}>
				<View
					style={{
						...StyleSheet.absoluteFillObject,
						backgroundColor: "cyan",
					}}
				/>

				<View style={styles.footerContent}>
					{slides.map(({ subtitle, description }, idx) => (
						<SubSlide
							key={idx}
							last={idx === slides.length - 1}
							{...{ subtitle, description }}
						/>
					))}
				</View>
			</View>
		</View>
	);
};

export default Onboarding;

const styles = StyleSheet.create({
	footerContent: {
		flex: 1,
		backgroundColor: "white",
		borderTopLeftRadius: BORDER_RADIUS,
	},
	container: {
		flex: 1,
		backgroundColor: "white",
	},

	slider: {
		height: SLIDE_HEIGHT,
		backgroundColor: "cyan",
		borderBottomRightRadius: BORDER_RADIUS,
	},

	footer: {
		flex: 1,
	},
});
