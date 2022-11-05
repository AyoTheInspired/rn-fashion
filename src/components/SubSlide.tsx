import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
	last: boolean | number;
	subtitle: string;
	description: string;
};

const SubSlide = ({ subtitle, description }: Props) => {
	return (
		<View style={styles.container}>
			<Text>{subtitle}</Text>
			<Text>{description}</Text>
		</View>
	);
};

export default SubSlide;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
