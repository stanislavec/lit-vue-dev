<template>
  <div class="clockWrapper">
    <p class="clockWrapper__paragraph" @click="onClick">
      {{ title }}
    </p>
    <p @click="onClick"></p>
    <span>{{ formattedTime }}</span>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'ClockComponent',
  props: ['title', 'onClick'],
  data() {
    return {
      clockId: '',
      formattedTime: undefined,
    };
  },
  methods: {
    getTime() {
      return setInterval(() => {
        this.formattedTime = dayjs().format('HH:MM:ss');
      }, 1000);
    },
  },
  mounted() {
    this.clockId = this.getTime();
  },
  beforeDestroy() {
    clearInterval(this.clockId);
  },
};
</script>

<style lang="scss">
$primary-color: #333;
$standart-white: #fff;

.clockWrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 500px;
  background: $primary-color;
  color: white;
  margin: 30px auto;
  border-radius: 20px;

  &__paragraph {
    font-size: 34px;
    color: $standart-white;
  }
}
</style>
