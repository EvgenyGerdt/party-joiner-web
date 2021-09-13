<template>
  <div class="auth-view__container">
    <div class="auth-view__block">
      <h1>Sign in</h1>

      <p-input
          type="text"
          label="Username"
          name="username"
          placeholder="PartyJoiner23"
          @set-value="setUsername"
          @enter-click="handleLogin"
      />

      <p-input
          type="password"
          label="Password"
          name="password"
          placeholder="Your password"
          @set-value="setPassword"
          @enter-click="handleLogin"
      />

      <div class="auth-view__block-reset">
        <router-link to="/reset">Forgot password?</router-link>
      </div>

      <button class="auth-view__block-btn" @click="handleLogin">
        <span v-if="!hasLoading">Log in</span>
        <loader v-else />
      </button>

      <div class="auth-view__block-register">
        <span>Don't have account?</span>
        <router-link to="/register">Sign up!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import pInput from '../components/p-input.vue';
import Loader from '../components/loader.vue';

import {mapActions, mapGetters} from 'vuex';

export default {
  name: "AuthView",

  components: {
    pInput,
    Loader,
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },

  computed: {
    ...mapGetters('auth', [
        'loading',
    ]),

    hasLoading() {
      return this.loading;
    },
  },

  methods: {
    ...mapActions('auth', [
        'login'
    ]),

    setUsername(value) {
      this.username = value;
    },

    setPassword(value) {
      this.password = value;
    },

    handleLogin() {
      this.login({
        username: this.username,
        password: this.password,
      });
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../styles/_colors.styl"

  .auth-view
    &__container
      width 100%
      height 100vh
      display flex
      justify-content center
      align-items center
      animation fade-block 1s ease forwards
      overflow hidden

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

      &-register > span
        margin-right 5px

@keyframes fade-block
  from
    opacity 0
  to
    opacity 1
</style>