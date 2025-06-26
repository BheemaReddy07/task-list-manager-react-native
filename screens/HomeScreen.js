import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Chip } from 'react-native-paper'
import TaskItem from '../components/TaskItem'
import { AppScreens } from '../utils/constants'

const HomeScreen = ({ tasks ,onTaskComplete,OnTaskDelete,changeScreen}) => {

    return (
        <View>
           <Chip onPress={()=>changeScreen(AppScreens.AddTaskScreen)} textStyle={{fontSize:16}} icon={'plus'} style={{padding:4 ,marginTop:15,marginHorizontal:10}}>Add New Task</Chip>
            <FlatList 
            
            style={{marginVertical:30}}
            data={tasks}
            keyExtractor={(item,index)=>item.id + index}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={(iter) =>
            (<TaskItem
                date={iter.item.date}
                title={iter.item.title}
                description={iter.item.description}
                id={iter.item.id}
                isComplete={iter.item.isComplete}
                onComplete={(id)=>onTaskComplete(id)}
                onDelete={(id)=>OnTaskDelete(id)}
            />
            )}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})