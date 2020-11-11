<template>
  <div class="clockWrapper">
    <p @click="onClick">{{title}}</p>
    <span>{{formattedTime}}</span>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: "ClockComponent",
  props: ['title', 'onClick'],
  data() {
      return {
        clockId: '',
        formattedTime: undefined
      }
  },
  methods: {
    getTime() {
      return setInterval(() => {
        this.formattedTime = dayjs().format('HH:MM:ss')
      }, 1000)
    }
  },
  mounted() {
    this.clockId = this.getTime()
  },
  beforeDestroy() {
    clearInterval(this.clockId)
  }
}
</script>

<style lang="css">
  .clockWrapper {
    padding: 20px 10px;
    font-size: 32px;
    width: 500px;
    background: forestgreen;
    color: white;
    margin: 30px auto;
    border-radius: 20px;
  }
</style>