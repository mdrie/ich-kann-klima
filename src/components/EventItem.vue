<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core"
import { Event } from "../types"

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true,
    },
  },

  data() {
    return {
      open: false,
    }
  },

  methods: {
    toggle() {
      const p = this.$refs.p as HTMLParagraphElement
      p.style.setProperty("--max-height", p.scrollHeight + "px")
      this.open = !this.open
    },
  },
})
</script>

<template>
  <li :class="{ new: !event.acknowledged, open }">
    <title @click="toggle">{{ event.title }}</title>
    <p ref="p">
      {{ event.description }}
    </p>
  </li>
</template>

<style lang="scss">
li {
  list-style: "▶ ";
  position: relative;

  &.new title {
    font-weight: bold;
  }

  title {
    display: block;
  }

  p {
    overflow: hidden;
    max-height: 0;
    margin: 0;
    transition: all 0.5s ease;
  }

  &.open {
    list-style: "▼ ";

    p {
      margin: 10px 0;
      max-height: var(--max-height);
    }
  }
}
</style>
