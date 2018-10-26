<template>
  <div>
    <v-container grid-list-md text-sm-center>
      <v-layout row wrap>
        <KanbanComponent :kanban="kanban" v-for="(kanban, index) in kanbans" :key="index"> </KanbanComponent>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import KanbanComponent from "@/components/KanbanComponent.vue"
  import database from "../assets/config.js"

  export default {
    name: "home",
    components: {
      KanbanComponent,
    },
    data: function () {
      return {
        kanbans: [{
            status: "backlog",
            color: "#455A64",
            fills: []
          },
          {
            status: "todo",
            color: "#00695C",
            fills: []
          },
          {
            status: "doing",
            color: "#9E9D24",
            fills: []
          },
          {
            status: "done",
            color: "#0277BD",
            fills: []
          }
        ]
      }
    },
    created() {
      this.documentReady()
    },
    methods: {
      documentReady: function () {
        let self = this
        var starCountRef = database.ref('/');
        starCountRef.on('value', function(snapshot) {

          self.kanbans[0].fills = [] 
          self.kanbans[1].fills = []   
          self.kanbans[2].fills = [] 
          self.kanbans[3].fills = [] 

          for(let i = 0; i < Object.keys(snapshot.val()).length; i++) {
            

            if(Object.keys(snapshot.val())[i] == 'backlog') {
                     
              let firstdata   = Object.values(snapshot.val())[i]
              let firstvalues = Object.values(firstdata)
              let firstkeys   = Object.keys(firstdata)
              
              for(let i = 0; i < firstkeys.length; i++) {
                self.kanbans[0].fills.push({
                  id: firstkeys[i],
                  task: firstvalues[i].task,
                  point: firstvalues[i].point,
                  description: firstvalues[i].description,
                  assignto: firstvalues[i].assignto,
                  date: firstvalues[i].date,
                  status: "backlog",
                  color: {
                    backgroud: "#00695C",
                    box: "blue-grey darken-2",
                    button: "#455A64"
                  }
                })
              }

            }

            
            if(Object.keys(snapshot.val())[i] == 'todo') {
                  
              let seconddata   = Object.values(snapshot.val())[i]
              let secondvalues = Object.values(seconddata)
              let secondkeys   = Object.keys(seconddata)
              
              for(let i = 0; i < secondkeys.length; i++) {
                self.kanbans[1].fills.push({
                  id: secondkeys[i],
                  task: secondvalues[i].task,
                  point: secondvalues[i].point,
                  description: secondvalues[i].description,
                  assignto: secondvalues[i].assignto,
                  date: secondvalues[i].date,
                  status: "todo",
                  color: {
                    backgroud: "#00695C",
                    box: "#00695C",
                    button: "#00695C"
                  }
                })
              }

            }

            if(Object.keys(snapshot.val())[i] == 'doing') {
                     
              let thirddata   = Object.values(snapshot.val())[i]
              let thirdvalues = Object.values(thirddata)
              let thirdkeys   = Object.keys(thirddata)
              
              for(let i = 0; i < thirdkeys.length; i++) {
                self.kanbans[2].fills.push({
                  id: thirdkeys[i],
                  task: thirdvalues[i].task,
                  point: thirdvalues[i].point,
                  description: thirdvalues[i].description,
                  assignto: thirdvalues[i].assignto,
                  date: thirdvalues[i].date,
                  status: "doing",
                  color: {
                    backgroud: "#9E9D24",
                    box: "#9E9D24",
                    button: "#9E9D24"
                  }
                })
              }

            }

            if(Object.keys(snapshot.val())[i] == 'done') {
                     
              let fourdata   = Object.values(snapshot.val())[i]
              let fourvalues = Object.values(fourdata)
              let fourkeys   = Object.keys(fourdata)
              
              for(let i = 0; i < fourkeys.length; i++) {
                self.kanbans[3].fills.push({
                  id: fourkeys[i],
                  task: fourvalues[i].task,
                  point: fourvalues[i].point,
                  description: fourvalues[i].description,
                  assignto: fourvalues[i].assignto,
                  date: fourvalues[i].date,
                  status: "done",
                  color: {
                    backgroud: "#9E9D24",
                    box: "#0277BD",
                    button: "#0277BD"
                  }
                })
              }

            }

          }
      
        })
      }
    }
  }
</script>