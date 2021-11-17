<template>
  <div class="question">
    {{questionInfo.sl}}. {{ questionInfo.title }}
    <div class="option"
      v-for="option in questionInfo.options"
      :key="option">
      <span v-on:click="onClickOption(option)">
        <input type="radio"
          v-model="userAns"
          :name="questionInfo.id"
          :value="option"
          :disabled="isDisabled">
        {{ option }}
      </span>
    </div>
    
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend<any, any, any, any>({
    name: 'Question',
    props: ['questionInfo'],
    data: () => {
      return { isDisabled: false, userAns: '' };
    },
    methods: {
      onClickOption (userAns: string): void {
        if (this.isDisabled) {
          return;
        }

        this.isDisabled = true;
        this.userAns = userAns;

        if (this.questionInfo.answer === userAns) {
          this.$store.commit('markAsCorrect');       
        }
      }
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
    cursor: pointer;
  }
  input[type="radio"] {
    cursor: pointer;
  }
</style>
