<template>
  <span class="timer">
    {{ text }} {{ counterFormattedString }}
  </span>
</template>

<script>
export default {
  name: "timer",

  props: {
    periodInSeconds: {
      type: Number,
      default: 10,
    },

    updateEveryInSeconds: {
      type: Number,
      default: 1,
    },

    text: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      interval: null,
      counter: 0,
    };
  },

  computed: {
    counterFormattedString() {
      let minutes = Math.floor(this.counter / 60);
      let seconds = Math.floor(this.counter % 60);

      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      return minutes + ':' + seconds;
    },
  },

  watch: {
    periodInSeconds(newVal) {
      if (newVal > 0) {
        this.startTimer();
      }
    },
  },

  mounted() {
    if (this.periodInSeconds > 0 && typeof window !== 'undefined') {
      this.startTimer();
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startTimer() {
      this.counter = this.periodInSeconds;
      this.$emit('timer-starts');
      this.interval = setInterval(() => {
        this.counter = this.counter - 1;
        if (!this.counter) {
          clearInterval(this.interval);
          this.$emit('timer-stops');
        }
      }, this.updateEveryInSeconds * 1000);
    },
  },
}
</script>

<style scoped>

</style>