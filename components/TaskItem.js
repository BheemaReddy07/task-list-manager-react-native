import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const TaskItem = ({title,date,description,id}) => {
  return (
      <Card>
        <Card.Title title={title} /> 
      </Card>
  )
}

export default TaskItem

const styles = StyleSheet.create({})