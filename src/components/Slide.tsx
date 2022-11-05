import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
	label: string;
	right?: boolean;
};

const Slide = ({ label, right }: Props) => {
	return (
		<View>
			<Text>{label}</Text>
		</View>
	);
};

export default Slide;

const styles = StyleSheet.create({});
