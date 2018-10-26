<template>
 
    <v-flex xs3>
      <v-card :color="kanban.color" style="color: #FFFFFF">
        <v-card-text class="px-0" style="text-transform: uppercase;">{{ kanban.status }}</v-card-text>
      </v-card>

      <v-flex xs12 text-sm-left v-for="(task, index) in kanban.fills" :key="index">
        <v-card v-if="task.color" :color="task.color.box" class="white--text">
          <v-card-title primary-title>
            <div style="font-size: 18px; font-weight: bold;"></div>
              {{ task.task}}
            <v-flex xs12>
              <v-card dark color="#3A4C54">
                <v-card-text class="px-0"><span style="color: #E0E0E0; margin-left: 10px;">Point : {{ task.point }}</span></v-card-text>
              </v-card>
            </v-flex>

            Description : 
            <v-flex xs12>
              <v-card dark color="#3A4C54">
                <v-card-text class="px-0">
                  <span style="color: #E0E0E0; margin-left: 10px;">
                    {{ task.description }}
                  </span>
                </v-card-text>
              </v-card>
            </v-flex>

            Created at :
            <v-flex xs12>
              <v-card dark color="#3A4C54">
                <v-card-text class="px-0"><span style="color: #E0E0E0; margin-left: 10px;">{{ task.date.slice(4,25) }}</span></v-card-text>
              </v-card>
            </v-flex>

          </v-card-title>
          <v-card-actions style="justify-content: center; padding-bottom: 20px;">

            <!-- <buttonmodalbacklog v-bind:backlog="backlog"></buttonmodalbacklog> -->
            <ChangeTask :task="task"/>
          </v-card-actions>
        </v-card>
      </v-flex>
     </v-flex>
</template>

<script>

import ChangeTask from "./ChangetaskComponent"

export default {
  name: "KanbanComponent",
  props: ["kanban"],
  components: {
    ChangeTask
  }
}
</script>

<style>

</style>
