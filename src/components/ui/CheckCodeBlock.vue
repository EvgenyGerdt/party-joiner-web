<template>
  <div class="reset-view__block">
    <h1>Reset password</h1>
    <p-input
        type="text"
        label="Code"
        name="code"
        placeholder="Enter 6 digit code"
        :max-length="time"
        @set-value="setCode"
        @enter-click="handleSubmit"
    />

    <div class="reset-view__block-timer" v-if="!isTimerEnds">
      <timer
          :text="timerText"
          period-in-seconds="1"
          @timer-starts="setTimer"
          @timer-stops="clearTimer"
      />
    </div>

    <div class="reset-view__block-again" v-if="isTimerEnds">
      <span>Try to </span>
      <span class="button" @click="resendCode">resend </span>
      <span>verification code</span>
    </div>

    <div class="reset-view__block-back">
      <router-link to="/login">Back</router-link>
    </div>
  </div>
</template>

<script>
import Timer from '../timer.vue';
import Loader from '../loader.vue';
import pInput from '../p-input.vue';

import {mapGetters, mapActions} from "vuex";

export default {
  name: "CheckCodeBlock",

  components: {
    Timer,
    Loader,
    pInput
  },

  props: {
    email: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      code: '',

      time: 120,
      isTimerEnds: false,

      timerText: 'Try to resend code after'
    };
  },

  computed: {
    ...mapGetters('reset', [
       'loading'
    ]),

    hasLoading() {
      return this.loading;
    },
  },

  watch: {
    code() {
      if (this.code.length === 6) {
        this.handleSubmit();
      }
    }
  },

  methods: {
    ...mapActions('reset', [
        'checkCode',
        'sendCode',
    ]),

    setCode(value) {
      this.code = value;
    },

    handleSubmit() {
      this.checkCode({
        code: this.code,
      });
    },

    clearTimer() {
      this.isTimerEnds = true;
      localStorage.setItem('timer', this.isTimerEnds);
    },

    setTimer() {
      localStorage.setItem('timer', this.isTimerEnds);
    },

    resendCode() {
      this.sendCode({
        username: this.username,
        email: this.email,
      });
    },
  },
}
</script>

<style lang="stylus" scoped>
.reset-view
  &__block > div, &__block > h1
    margin-bottom 10px
.button
  color #9435f6
  cursor pointer
</style>