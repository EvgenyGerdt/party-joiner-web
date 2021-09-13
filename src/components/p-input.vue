<template>
  <div class="input__container">
    <input
        :id="name"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :class="{'error': errors}"
        @input="setValue"
        @keydown.enter="handleEnterClick"
    >
    <label :for="name" v-if="label" class="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "p-input",

  props: {
    name: {
      type: String,
      default: 'input',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Text',
    },
    maxLength: {
      type: Number,
      default: 524288,
    },
    errors: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    setValue(event) {
      this.$emit('set-value', event.target.value);
    },

    handleEnterClick() {
      this.$emit('enter-click');
    },
  },
}
</script>

<style lang="stylus" scoped>
.input__container
  display flex
  flex-direction column-reverse
  align-items flex-start
  width 100%
  & > label
    transition 300ms ease
  & > input
    width 100%
    border-radius 10px
    padding 10px
    outline none
    background #f3f3f3
    border 1px solid #f3f3f3
    transition 300ms ease
    &:focus
      border 1px solid #9435f6
      transition 300ms ease
    &:focus + label
      transition 300ms ease
      color: #9435f6
</style>