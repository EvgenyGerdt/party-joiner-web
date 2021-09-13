<template>
  <div class="reset-view__container">
    <send-code-block
        :username="this.username"
        :email="this.email"
        @set-username="setUsername"
        @set-email="setEmail"
        v-if="showSendCodeBlock"
    />

    <check-code-block v-if="showCheckCodeBlock" />

    <change-password-block
        :email="this.email"
        v-if="showChangePasswordBlock"
    />

    <div class="reset-view__change-success" v-if="showEndChange">
      <h1>Password successfully changed!</h1>
      <span>Go to </span>
      <router-link to="/login">Sign in</router-link>
    </div>
  </div>
</template>

<script>
import SendCodeBlock from "../components/ui/SendCodeBlock.vue";
import CheckCodeBlock from "../components/ui/CheckCodeBlock.vue";
import ChangePasswordBlock from "../components/ui/ChangePasswordBlock.vue";

import pInput from '../components/p-input.vue';
import Loader from '../components/loader.vue';

import {mapGetters} from 'vuex';

export default {
  name: "ResetPasswordView",

  components: {
    SendCodeBlock,
    CheckCodeBlock,
    ChangePasswordBlock,
    pInput,
    Loader,
  },

  data() {
    return {
      email: '',
      username: '',
    };
  },

  computed: {
    ...mapGetters('reset', [
        'isSent',
        'isChecked',
        'isChanged',
    ]),

    hasLoading() {
      return this.loading;
    },

    showSendCodeBlock() {
      return !this.isSent && !this.isChecked && !this.isChanged;
    },

    showCheckCodeBlock() {
      return this.isSent && !this.isChecked && !this.isChanged;
    },

    showChangePasswordBlock() {
      return this.isSent && this.isChecked && !this.isChanged;
    },

    showEndChange() {
      return this.isSent && this.isChecked && this.isChanged;
    },
  },

  methods: {
    setUsername(value) {
      this.username = value;
    },

    setEmail(value) {
      this.email = value;
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../styles/_colors.styl"

.reset-view
  &__container
    width 100%
    height 100vh
    display flex
    justify-content center
    align-items center
    animation fade-block 1s ease forwards
  &__change-success > h1
    margin-bottom 10px
  &__block > div
    margin-bottom 15px
  &__block
    width 25%
    height 60%
    display flex
    flex-direction column
    justify-content center
    align-items center
    &-reset
      width 100%
      display flex
      justify-content flex-end
    &-btn
      width 50%
      margin-bottom 20px
      padding 10px
      border transparent
      border-radius 10px
      color white
      font-size 20px
      font-weight bold
      background $default-gradient
      transition 300ms ease
      &:hover
        transform scale(1.05)
        transition 300ms ease
    &-back > span
      margin-right 5px

@keyframes fade-block
  from
    opacity 0
  to
    opacity 1
</style>