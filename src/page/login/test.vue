<template>
    <div>
        <p>Hay ini login {{name}}</p>
        <!-- <p>Hay ini count {{count}}</p> -->
     <q-btn  color="primary" label="Primary" type="button" @click="counting">count is {{ count2 }}</q-btn>
      <!-- <q-input color="teal" filled v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input> -->


        
    </div>
</template>

<script>
import { ref } from 'vue'
import { reactive } from 'vue'
export default {
    setup () {
        const count = ref(0)
        const count2 = ref(0)
        console.log('setup count', count)
        // expose to template and other options API hooks
        function counting(){
            console.log('counting count B', count2)
            count2.value ++
            console.log('counting count F', count2)
        }

        
        return {
            count,
            count2,
            counting
        }
    },
     data() {
        return {
            name: 'value',
        };
     },
     methods:{
        // counting(){
        //     console.log('counting count B', this.count)
        //     this.count2++
        //     console.log('counting count F', this.count)
        // },
     },
     created(){
        console.log('created count', this.count)
     }
}
</script>

<style lang="scss" scoped>

</style>