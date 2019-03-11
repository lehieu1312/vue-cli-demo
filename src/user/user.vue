<template>
    <div class="container">
        <div class="row background-color">
            <div class="col-lg-12">
                    <h2>User list</h2>
                    <p>Hello: {{name}} - Age: {{age}}</p>
                    <p>Hello: {{eventHandle}}</p>
                    <button @click="changeValue">click</button>
            </div>
            <user-detail 
                :customName="name" 
                @nameWasReset="name = $event" 
                @eventWasReset="eventHandle = $event"
                :resetNameFn='resetName'
                :userAge='age'
                ></user-detail>
            <user-edit 
                :userAge='age' 
                @changedAge="age = $event"
            ></user-edit>    
        </div>
    </div>
</template>

<script>

import userDetail from "./user-detail.vue";
import userEdit from "./user-edit.vue";
export default {
    data: function(){
        return{
            name: 'Le Hoai',
            eventHandle: 'Event',
            age: 10
        }
    },
    components:{
    'user-detail':userDetail,
    'user-edit':userEdit
  },
  methods: {
      changeValue: function(){
          this.name = 'Le Manh Hieu';
    },
    resetName() {
        this.name = 'Lee D.Mark'
    } 
  }
}
</script>
 
<style scoped>
    .background-color{
        background-color: aqua;
    }
</style>

