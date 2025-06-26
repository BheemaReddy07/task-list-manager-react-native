import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput, Chip, Appbar } from 'react-native-paper'
import { AppScreens } from '../utils/constants'

const AddTaskScreen = ({ onAddNewTask ,changeScreen }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const handleSubmit = () => {
    if (!title || !title.trim() === "" || !description || !description.trim() === "") {
      Alert.alert("Missing Fields", "Add Title and description to save task")
    }
    const newTask = {
      title, description,
      date: new Date().toLocaleDateString(),
      isComplete: false,
      id: Date.now(),
    }
    onAddNewTask(newTask)
  }
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {changeScreen(AppScreens.HomeScreen) }} />
        <Appbar.Content title="Add new Task" />
      </Appbar.Header>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} label={'Title'} mode='outlined' placeholder='Enter Title' />
      <TextInput
        multiline
        // numberOfLines={10}
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}

        label={'Description'}
        mode='outlined'
        placeholder='Enter Description' />
      <Button onPress={handleSubmit} mode='outlined' labelStyle={{ fontSize: 20, fontWeight: "700" }}>Save Task</Button>
    </View>
  )
}

export default AddTaskScreen

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  input: {
    marginVertical: 10,
    padding: 8
  },
  heading: {
    fontSize: 26,
    fontWeight: 700,
    padding: 10
  }
})