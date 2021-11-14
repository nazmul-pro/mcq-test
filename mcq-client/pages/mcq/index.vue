<template>
  <div class="content">
    <div class="remaining">
      <span>Remaining Time</span>
      <span style="color:red;">{{ countDown === 0 ? 'TimesUp' : '' }}</span>
      <span>{{ remaining }}</span>
    </div>

    <Question class="question"
      :class="countDown === 0 ? 'no-access' : 'has-access'"
      v-for="ques in questions"
      :key="ques.id"
      :questionInfo="ques"/>
    
    <div class="right">
      <NuxtLink to="/result">
        <button class="result-btn">RESULT</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IQuestion, QUESTIONS } from './../../data/questions';
interface IQuestionViewModel extends IQuestion{
  userAns: string;
}

export default Vue.extend<any, any, any, any>({
  data() {
    return {      
      questions: QUESTIONS,
      countDown: QUESTIONS.length * 60,
      remaining: '',
      countDownTimer() {
          if (this.countDown > 0) {
              setTimeout(() => {
                  this.countDown -= 1;
                  this.remaining = this.formatSecondsToRemaining(this.countDown);
                  this.countDownTimer();
              }, 1000)
          }
      },
      formatSecondsToRemaining(seconds: number): string {
        const format = (val: number) => `0${Math.floor(val)}`.slice(-2)
        const hours = seconds / 3600
        const minutes = (seconds % 3600) / 60

        return [hours, minutes, seconds % 60].map(format).join(':')
      },
    }
  },
  created() {
    this.$actions.setResult(0);
  },
  beforeMount() {
    this.countDownTimer();
 },
})


</script>
<style scoped>
.right {
  text-align: right;
}
  .content {
    width: 70%;
    margin: 0 auto;
  }
  .remaining {
    padding: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    height: 60px;
    color: #6a1ce8;
    font-weight: bold;
    font-size: 30px;
    background-color: #fceafe;
  }
  .question {
    margin-top: 30px;
  }
  .result-btn {
    margin-top: 30px;
    cursor: pointer;
    font-size: 30px;
    width: 320px;
    height: 55px;
    border-radius: 10px;
    text-align: center;
    color: white;
    border: none;
    background-color: #6a1ce8;
  }
  .no-access {
    pointer-events: none;
    cursor: not-allowed;
  }
  .has-access {}
</style>
