import { View } from "react-native";

// Use = to set default values for your props
const Spacer = ({ width = "100%", height = 40 }) => {
    return (
        // Because the keys and variables share the exact same names,
        // style={{ width: width, height: height }} can be shortened to this:
        <View style={{ width, height }} />
    );
};

export default Spacer;