<template>
  <div class="col-lg-6 text-center background-color">
       <h2>User Detail</h2>
       <p>{{reverseName()}}</p>
       <p>{{evenName}}</p>
       <p>My age: {{userAge}}</p>
       <button @click="resetName">Reset</button>
       <button @click="resetNameFn">Reset Name Fn</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
   
    props:{
        customName:{
            type: String,
            required:true,
            // default: 'Le Hieu'
            default: function(){
                return 'Le Hieu'
            }
        },
        evenName:{
            type: String,
            required: false,
             default: function(){
                return 'Demo'
            }
        },
        resetNameFn: Function,
        userAge: Number
    },
    methods: {
        reverseName(){
            return this.customName.split("").reverse().join("");
        },
        resetName(){
            this.customName ='D.Mark',
            this.evenName = 'Demo 2',
            this.$emit('eventWasReset', this.evenName)
            this.$emit('nameWasReset', this.customName)
        },
    },
    created(){
        eventBus.$on('changedAge',(age)=>{
            this.userAge = age;
        });
    }
}
</script>


<style  scoped>
    .background-color{
        background-color: aquamarine;
    }
</style>
