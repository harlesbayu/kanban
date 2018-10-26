<template>
  <v-dialog v-model="dialog" persistent max-width="400px">
    <v-btn slot="activator" v-if="task.color" :color="task.color.button" dark>Show Detail</v-btn>

    <v-card>
      <v-card-text>
        <v-flex sm12>

          <div style= "float: right; margin-bottom:4px;">
            <v-btn @click.native="dialog = false" style="width: 4px; border-radius:3px; color: #FFFFFF;" v-if="task.color" :color="task.color.box"> CLOSE </v-btn>
          </div>

          <v-card v-if="task.color" :color="task.color.box" class="white--text" style="clear:both;">
            <v-card-title primary-title>
            <v-text-field
              label="Task"
              solo-inverted
              v-model="task.task"
              readonly
            ></v-text-field>
            
            <v-text-field
              label="Priority"
              solo-inverted
              v-model="task.point"
              readonly
            ></v-text-field>
          
            <v-textarea
            solo-inverted
            name="input-7-4"
            label="Description"
            v-model="task.description"
            readonly
            ></v-textarea>

            <v-text-field
              label="Assign To"
              solo-inverted
              v-model="task.assignto"
              readonly
            ></v-text-field>
          

            </v-card-title>
          </v-card>
        </v-flex>
      </v-card-text>

      <v-card-title v-if="task.status == 'backlog'">
        <v-spacer></v-spacer>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="remove(task)">DELETE</v-btn>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="backlogToTodo(task)">TODO</v-btn>
      </v-card-title>

      <v-card-title v-if="task.status == 'todo'">
        <v-spacer></v-spacer>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="todoToBacklog(task)">BACKLOG</v-btn>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="remove(task)" >DELETE</v-btn>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="todoToDoing(task)">DOING</v-btn>
      </v-card-title>

      <v-card-title v-if="task.status == 'doing'">
        <v-spacer></v-spacer>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="doingToTodo(task)">TODO</v-btn>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="remove(task)">DELETE</v-btn>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="doingToDone(task)">DONE</v-btn>
      </v-card-title>

      <v-card-title v-if="task.status == 'done'">
        <v-spacer></v-spacer>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="remove(task)">DELETE</v-btn>
        <v-btn v-if="task.color" :color="task.color.button" @click.native="dialog = false" style="color: #FFFFFF;" @click="doneToDoing(task)">DOING</v-btn>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>

import database from "../assets/config.js"

export default {
  name: "ChangeTask",
  props: ["task"],
  data: function () {
    return {
      dialog: false
    }
  },
  methods: {
    backlogToTodo: function(task){
      database.ref('backlog/' + task.id).set({})
      .then(function () {
        database.ref('todo/').push({
          task: task.task,
          point: task.point,
          description: task.description,
          assignto: task.assignto,
          date: Date()
        })
      })   
    },
    todoToBacklog: function(task) {
      database.ref('todo/' + task.id).set({})
        .then(function () {
          database.ref('backlog/').push({
            task: task.task,
            point: task.point,
            description: task.description,
            assignto: task.assignto,
            date: Date()
          })
        })
    },
    todoToDoing: function(task) {
      database.ref('todo/' + task.id).set({})
        .then(function () {
          database.ref('doing/').push({
            task: task.task,
            point: task.point,
            description: task.description,
            assignto: task.assignto,
            date: Date()
          })
        })
    },
    doingToTodo: function(task) {
      database.ref('doing/' + task.id).set({})
        .then(function () {
          database.ref('todo/').push({
            task: task.task,
            point: task.point,
            description: task.description,
            assignto: task.assignto,
            date: Date()
          })
        })
    },
    doingToDone: function(task) {
      database.ref('doing/' + task.id).set({})
        .then(function () {
          database.ref('done/').push({
            task: task.task,
            point: task.point,
            description: task.description,
            assignto: task.assignto,
            date: Date()
          })
        })
    },
    doneToDoing: function(task) {
      database.ref('done/' + task.id).set({})
        .then(function () {
          database.ref('doing/').push({
            task: task.task,
            point: task.point,
            description: task.description,
            assignto: task.assignto,
            date: Date()
          })
        })
    },
    remove: function (task) {
      if(task.status == 'backlog'){
        database.ref('backlog/' + task.id).set({})
      } else if (task.status == 'todo') {
        database.ref('todo/' + task.id).set({})
      } else if (task.status == 'doing') {
        database.ref('doing/' + task.id).set({})
      } else {
        database.ref('done/' + task.id).set({})
      }
      
    }
  }
}
</script>

<style>

</style>
