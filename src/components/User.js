import { View, Text } from "react-native";

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