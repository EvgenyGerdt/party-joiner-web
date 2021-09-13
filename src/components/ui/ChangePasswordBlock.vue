<template>
  <form class="reset-view__block">
    <h1>Change password</h1>
    <p-input
        type="password"
        label="Password"
        name="confirmPassword"
        placeholder="Password"
        @set-value="setPassword"
        @enter-click="handleSubmit"
    />
    <p-input
        type="password"
        label="Confirm password"
        name="confirmPassword"
        placeholder="Confirm password"
        @set-value="setConfirmPassword"
        @enter-click="handleSubmit"
    />

    <button class="reset-view__block-btn" @click="handleSubmit">
      <span v-if="!hasLoading">Send code</span>
      <loader v-else />
    </button>

    <div class="reset-view__block-back">
      <router-link to="/login">Back</router-link>
    </div>
  </form>
</template>

<script>
import pInput from '../p-input.vue';
import Loader from '../loader.vue';

import {mapGetters, mapActions} from "vuex";

export default {
  name: "ChangePasswordBlock",

  components: {
    Loader,
    pInput
  },

  props: {
    email: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      password: '',
      confirmPassword: '',
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

  methods: {
    ...mapActions('reset', [
        'changePassword'
    ]),

    setPassword(value) {
      this.password = value;
    },

    setConfirmPassword(value) {
      this.confirmPassword = value;
    },

    handleSubmit() {
      console.log(this.email)
      this.changePassword({
        email: this.email,
        password: this.password,
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../styles/_colors.styl"

.reset-view
  &__block > h1
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
</style>