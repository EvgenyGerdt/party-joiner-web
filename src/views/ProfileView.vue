<template>
  <div class="profile-view__container">
    <header class="profile-view__header">
      <div class="profile-view__header-block">
        <svg-icon :icon="['fab', 'github']" />
        <a href="https://github.com/EvgenyGerdt/party-joiner-v2">Get the app</a>
      </div>
      <p>PARTY JOINER</p>
      <div class="profile-view__header-block">
        <span>{{ username }}</span>
        <svg-icon icon="caret-down" />
      </div>
    </header>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ProfileView",

  computed: {
    ...mapGetters('auth', [
       'user',
    ]),

    username() {
      return this.user.username;
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../styles/_colors.styl"

.profile-view
  &__container
    width 100%
    height 100vh
    display flex
    justify-content center
    padding 20px 0
  &__header
    width 80%
    height 70px
    display flex
    justify-content space-between
    align-items center
    padding 0 50px
    background white
    box-shadow 0 3px 18px 1px rgba(34, 60, 80, 0.2)
    border-radius 10px
    &-block
      width 33%
      & > svg
        margin 0 5px
      & > span, > a, > svg
        color black
        cursor pointer
        font-weight bold
        transition 300ms ease
      & > a:hover
        color #9435f6
        transition 300ms ease
      & > span:hover
        color #9435f6
        transition 300ms ease
      & > span:hover + svg
        color #9435f6
        transition 300ms ease
    & > p
      font-size 36px
      font-weight bold
      font-family Futura
</style>