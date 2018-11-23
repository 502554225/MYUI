<template>
    <div class="steps">
      <slot></slot>
    </div>
</template>

<script>
  import {findComponentsDownward} from "@/utils/assist";

  export default {
        name: "steps",
        mounted(){
          let childs= findComponentsDownward(this,'step')
          childs[childs.length-1].end=true
        }
    }
</script>

<style scoped>
  .steps{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;

  }
  hr{
    margin-top: 10px;
    width: 100%;
    z-index: 1;
  }
</style>
