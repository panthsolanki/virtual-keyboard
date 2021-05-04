<template src="./keyboard.html"></template>
<style scoped lang="scss" src="./keyboard.scss"></style>

<script>
import alphabets from "@/constant";
export default {
  data() {
    return {
      alphabetsInput: alphabets,
      isCapsLockPressed: true
    };
  },
  methods: {
    getActiveValue(input) {
      return this.isCapsLockPressed ? input.shiftValue : input.value;
    }
  }
};
</script>
