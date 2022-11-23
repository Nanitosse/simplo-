import RenderField from "../features/fields/RenderField";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View, } from 'react-native';
import { comments } from "../shared/comment";
import { fields } from "../shared/fieldsArray";
import { color } from "react-native-reanimated";


const FieldInfoScreen = ({ route }) => {
    const { item } = route.params;
    const [comments, setComments] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false)
    const renderCommentItem = ({ item }) => {
        return (
            <View style={StyleSheet.commentItem}>
                <Text style={{ fontSize: 14, color: 'white' }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating}</Text>
                <Text style={{ fontSize: 12, color: 'white' }}>
                    {`--${item.author}, ${item.date}`}
                </Text>
            </View>
        )
    }
    return (
        <FlatList
            data={comments.filter(
                (comment) => comment.itemId === item.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}

            contentContainerStyle={{
                marginHorizontal: 20,
                paddingVertical: 20,
            }}
            ListHeaderComponent={
                <>
                    <RenderField
                        item={item}
                        isfavorite={favorite}
                        markFavorite={()=>setFavorite(true)}

                    />
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>

            }
        />
    )

}


styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        // paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'

    }


})

export default FieldInfoScreen;