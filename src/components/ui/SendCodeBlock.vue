<template>
  <div class="reset-view__block">
    <h1>Send code</h1>
    <p-input
        type="text"
        label="Email"
        name="email"
        placeholder="joiner@party.com"
        @set-value="setEmail"
        @enter-click="handleSubmit"
    />
    <p-input
        type="text"
        label="Username"
        name="username"
        placeholder="PartyJoiner23"
        @set-value="setUsername"
        @enter-click="handleSubmit"
    />

    <button class="reset-view__block-btn" @click="handleSubmit">
      <span v-if="!hasLoading">Send code</span>
      <loader v-else />
    </button>

    <div class="reset-view__block-back">
      <router-link to="/login">Back</router-link>
    </div>
  </div>
</template>

<script>
import Loader from '../loader.vue';
import pInput from '../p-input.vue';

import {mapActions, mapGetters} from "vuex";

export default {
  name: "SendCodeBlock",

  components: {
    Loader,
    pInput,
  },

  props: {
    email: {
      type: String,
      default: '',
    },

    username: {
      type: String,
      default: '',
    },
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
       'sendCode'
    ]),

    setUsername(value) {
      this.$emit('set-username', value);
    },

    setEmail(value) {
      this.$emit('set-email', value)
    },

    handleSubmit() {
      this.sendCode({
        username: this.username,
        email: this.email,
      });
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../../styles/_colors.styl"

.reset-view
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