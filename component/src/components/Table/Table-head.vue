<template>
      <thead>
          <tr>
              <th v-for="item in headData">
                  <cell :cellData='item'></cell>
              </th>
          </tr>
      </thead>
</template>
<script>
import cell from "./Table-cell.vue";
export default {
name:'tablehead',
    components:{
        cell
    },
    props:{
        headData:{
            type:Array,
            default:[]
        }
    }
}
</script>
