import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },

    title: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: 20,
        textAlign: "center"
    },

    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
        paddingVertical: 30,
        backgroundColor: theme.colors.white,
        borderRadius: 16
    },

    label: {
        fontSize: 16,
        fontWeight: "400",
        color: theme.colors.text
    },

    input: {
        marginTop: 10,
        paddingBottom: 4,
        minWidth: 60,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.primary ,
        fontSize: 40,
        textAlign: "center"
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 30,
        width: "80%",
        justifyContent: "space-around"
    }
})

export default styles;