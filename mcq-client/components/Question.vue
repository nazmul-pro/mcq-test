<template>
  <div class="question">
    {{ questionInfo.title }}
    <div class="option"
      v-for="option in questionInfo.options" :key="option">
      <input type="radio" :name="questionInfo.id" 
        v-model="questionInfo.userAns" 
        :value="option" 
        :disabled="questionInfo.userAns"
        @change="onChange($event)">
      {{ option }}
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend<any, any, any, any>({
  name: 'Question',
  props: ['questionInfo'],
  methods: {
    onChange (): void {
      this.$forceUpdate();

      if (this.questionInfo.answer === this.questionInfo.userAns) {
        this.$actions.increment();        
      }
    }
  },
  created() {
    this.questionInfo.userAns = null;
  }
})
</script>

<style scoped>
  .question {
    padding: 30px;
    border-radius: 10px;
    color: #6a1ce8;
    font-weight: bold;
    font-size: 20px;
    background-color: #fceafe;  
  }
  .option {
    padding-left: 30px;
  }
</style>
