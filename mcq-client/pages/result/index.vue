<template>
  <div class="centered start-container">
    <div class="content">
      <div class="primary-text">MCQ RESULT</div>
      <img :src="require('./../../assets/image/congrat.png')">
      <div>You got {{ getScore }} score</div>
      <NuxtLink to="/mcq" class="nav-link">
        <button class="start-btn">TAKE AGAIN</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'Result',
    computed: { ...mapGetters(['getScore']) }
  })
</script>

<style scoped>
  .primary-text {
    font-weight: bold;
    color: #6a1ce8;
  }
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .start-container {
    background-color: #fceafe;
    border-radius: 30px;
    height: 410px;
    width: 570px;
  }
  .content {
    padding-top: 60px;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
  }
  .start-btn {
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
</style>
