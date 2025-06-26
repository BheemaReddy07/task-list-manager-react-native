import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppScreens, Dummy_Tasks } from '../utils/constants'
import AddTaskScreen from '../screens/AddTaskScreen'
import HomeScreen from '../screens/HomeScreen'

const AppManager = () => {
    const [currentScreen, setCurrentScreen] = useState(AppScreens.HomeScreen)
    const [tasks,setTasks] = useState([...Dummy_Tasks])
    return (
        <View>
            {currentScreen === AppScreens.AddTaskScreen ? (<AddTaskScreen />) : (<HomeScreen tasks={tasks} />)}
        </View>
    )
}

export default AppManager

const styles = StyleSheet.create({})