import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PostComponent = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <Image source={require("../../assets/Images/image7.jpg")} style={Styles.profile} />
                <Text style={{ marginLeft: "4%", marginTop: "3%", fontSize: 16 }}>_Eva</Text>
            </View>
            <View>
                <Image source={require("../../assets/Images/IgPostComponent.jpg")} style={Styles.igpost} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../assets/Images/like.png")} style={Styles.like} />
                    <Image source={require("../../assets/Images/timeline.png")} style={Styles.like} />
                    <Image source={require("../../assets/Images/send.png")} style={Styles.like} />
                </View>
                <View style={{}}>
                    <Image source={require("../../assets/Images/bookmark.png")} style={Styles.bookmark} />
                </View>
            </View>
            <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../assets/Images/image5.jpg")} style={Styles.likepic} />
                    <Text style={{ padding: 9 }}>Liked by elena__ and 52,589 others</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontWeight: 600, marginLeft: "3%", marginRight: "2%" }}> _Eva There is art all around us, take a moment to unserstand the world around us</Text>

                </View>
            </View>
        </View >
    )
}

export default PostComponent
const Styles = StyleSheet.create({
    profile: {
        height: 30,
        width: 30,
        borderRadius: 50,
        marginLeft: "2.5%",
        marginTop: "2%",
        marginBottom: "2%"
    },
    igpost: {
        width: "100%"
    },
    like: {
        height: 30,
        width: 30,
        marginLeft: "3%",
        marginTop: "3%",
        marginRight: "3%"
    },
    bookmark: {
        height: 30,
        width: 30,
        marginTop: "20%",
        justifyContent: "flex-end",
    },
    likepic: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginTop: "2%",
        marginLeft: "3%"

    }
});