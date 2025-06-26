import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { Button, Card,Chip } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
const TaskItem = ({ title, date, description, id ,isComplete,onComplete ,onDelete}) => {
    return (
        <Card style={styles.card}>
            {isComplete && 
            // <Chip icon={"calendar-multiple-check"} style={{margin:3,marginLeft:"auto" }} mode="outlined">Task Done</Chip>
            <Icon size={20} style={styles.icon} name="check-square" />
            }
            <Card.Title title={title} />
            <Card.Content style={styles.padding} title={title} />
            <Card.Content>
                <Text variant="titleLarge">{description}</Text>
            </Card.Content>
            <Card.Actions
                style={{
                    width: "100%",
                    display: "flex",
                    ...styles.padding
                }}>
                <Button onPress={()=>onDelete(id)} style={{ marginRight: "auto" }}>Delete</Button>
                <Button onPress={()=>onComplete(id)}>Done</Button>
            </Card.Actions>
        </Card>
    )
}

export default TaskItem

const styles = StyleSheet.create({
    padding: {
        padding: 12
    },
    card: {
        margin: 10,
        ...Platform.select({
            android: {
                elevation: 10,
            },
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 10,
            }
        })
    },
    icon:{
        marginLeft:'auto',
        marginVertical:4,
        marginRight:4
    }
})