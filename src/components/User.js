import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function User(props) {
    return (
        <View>
            <Text>
                {JSON.stringify(props.data)}
            </Text>
        </View>
    );
};

User.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })
}