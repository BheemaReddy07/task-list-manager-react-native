import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppScreens, Dummy_Tasks } from '../utils/constants'
import AddTaskScreen from '../screens/AddTaskScreen'
import HomeScreen from '../screens/HomeScreen'

const AppManager = () => {
    const [currentScreen, setCurrentScreen] = useState(AppScreens.HomeScreen)
    const [tasks, setTasks] = useState([...Dummy_Tasks])

    const handleTaskComplete = (id) => {
        const taskIndex = tasks.findIndex((task)=>task.id ==id)
        const newList = [...tasks];
        newList[taskIndex] = {
            ...newList[taskIndex],
            isComplete:true
        }
        setTasks(newList)
    }
    const handleTaskDelete = (id) => {
        const filteredTasks = tasks.filter(task=>task.id!==id)
        setTasks(filteredTasks)
    }
    const handleNewTask = (newTask) => {
        setTasks((prev) => [...prev, { ...newTask }])
        setCurrentScreen(AppScreens.HomeScreen)
    }

    return (
        <View>
            {currentScreen === AppScreens.AddTaskScreen ? (<AddTaskScreen onAddNewTask={handleNewTask} changeScreen={(screen)=>setCurrentScreen(screen)} />) : (<HomeScreen tasks={tasks} onTaskComplete={handleTaskComplete} OnTaskDelete={handleTaskDelete} changeScreen={(screenName) => setCurrentScreen(screenName)} />)}
        </View>
    )
}

export default AppManager

const styles = StyleSheet.create({})