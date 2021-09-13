<template>
  <div class="register-view__container">
    <div class="register-view__block">
      <h1>Sign up</h1>
      <p-input
          type="text"
          label="Email"
          name="email"
          placeholder="Your email"
          @set-value="setEmail"
          @enter-click="handleRegister"
      />

      <p-input
          type="text"
          label="Username"
          name="username"
          placeholder="PartyJoiner23"
          @set-value="setUsername"
          @enter-click="handleRegister"
      />

      <p-input
          type="password"
          label="Password"
          name="password"
          placeholder="Your password"
          @set-value="setPassword"
          @enter-click="handleRegister"
      />
      <p-input
          type="password"
          label="Confirm password"
          name="confirm"
          placeholder="Confirm your password"
          @set-value="setConfirmPassword"
          @enter-click="handleRegister"
      />

      <p-input
          type="text"
          label="Secret Word"
          name="secret"
          placeholder="Write secret word"
          @set-value="setSecretWord"
          @enter-click="handleRegister"
      />

      <button class="register-view__block-btn" @click="handleRegister">
        <span v-if="!hasLoading">Let's go!</span>
        <loader v-else />
      </button>

      <div class="register-view__block-login">
        <span>Already have account?</span>
        <router-link to="/login">Sign in!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../components/loader.vue';
import pInput from '../components/p-input.vue';

import {mapActions, mapGetters} from "vuex";

export default {
  name: "RegisterView",

  components: {
    Loader,
    pInput,
  },

  data() {
    return {
      email: '',

      username: '',

      password: '',
      confirmPassword: '',

      secretWord: '',
    };
  },

  computed: {
    ...mapGetters('auth', [
        'loading'
    ]),

    hasLoading() {
      return this.loading;
    },
  },

  methods: {
    ...mapActions('auth', [
        'register'
    ]),

    setEmail(value) {
      this.email = value;
    },

    setUsername(value) {
      this.username = value;
    },

    setPassword(value) {
      this.password = value;
    },

    setConfirmPassword(value) {
      this.confirmPassword = value;
    },

    setSecretWord(value) {
      this.secretWord = value;
    },

    handleRegister() {
      this.register({
        email: this.email,
        username: this.username,
        password: this.password,
        secretWord: this.secretWord,
      });
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../styles/_colors.styl"

.register-view
  &__container
    width 100%
    height 100vh
    display flex
    justify-content center
    align-items center
    animation fade-block 1s ease forwards

  &__block > div
    margin-bottom 15px

  &__block
    width 80%
    height 60%
    display flex
    flex-direction column
    justify-content center
    align-items center
    @media (min-width 768px)
      width 50%
    @media (min-width 992px)
      width 25%

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

    &-login > span
      margin-right 5px

@keyframes fade-block
  from
    opacity 0
  to
    opacity 1
</style>