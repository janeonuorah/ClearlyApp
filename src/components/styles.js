import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const COLORS = {
    primary: '#05509B',
    secondary: '#DEE1FD',
    white: '#fff',
    red: '#820d0d',
    black: '#000000',
    grey: 'grey'
};

export {
    width,
    height,
    COLORS,
}