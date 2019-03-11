<template>
     <div class="col-lg-6 text-center background-color">
         <h2>User Edit </h2>
         <p>Age: {{userAge}}</p>
         <button @click="editAge(30)">Change age</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
   
    props:{
        userAge:Number
    },
    methods: {
        editAge(age){
            // this.$emit('changedAge',30);
            eventBus.$emit('changedAge',age);
        },
        changeAge(){
            this.userAge = 20;
        }
    }
}
</script>

<style scoped>
 .background-color{
        background-color: rebeccapurple;
    }
</style>

