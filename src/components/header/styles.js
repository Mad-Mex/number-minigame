import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        height: 80,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 20,
        color: theme.colors.white,
        fontWeight: "700"
    }
})

export default styles;