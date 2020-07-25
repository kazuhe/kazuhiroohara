<template>
  <button
    :disabled="disabled"
    class="button"
    :class="disabled ? '-disabled' : ''"
    type="button"
    @click="$emit('click')"
  >
    <Arrow />
    <p>{{ text }}</p>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Arrow from '@/components/svg/Arrow.vue'

export default defineComponent({
  name: 'Button',
  components: {
    Arrow
  },
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s ease;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    width: 100%;
    height: 1px;
    background: $deepGray;
  }

  svg {
    width: 8px;
    transform: translate(-3px, 0) rotate(270deg);
    fill: $deepGray;
  }

  p {
    font-weight: 700;
    color: $deepGray;
  }

  &.-disabled {
    background: #000;
    color: #fff;
  }

  &:hover {
    background: $mainColor;
  }
}
</style>
