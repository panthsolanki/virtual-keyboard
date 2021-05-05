<template src="./keyboard.html"></template>
<style scoped lang="scss" src="./keyboard.scss"></style>

<script>
import { mapState } from "vuex";
import { utilityService } from "@/service/utility";
export default {
  data() {
    return {
      normalKeyType: ["alphabet", "number", "splChar", "space", "enter"],
      isCapsLockPressed: false,
      isShiftPressed: false,
      isSplCharPressed: false,
      inputValueArr: []
    };
  },
  computed: {
    isCapitalize() {
      // to check current capitalize state
      return this.isCapsLockPressed ^ this.isShiftPressed;
    },
    inputValue() {
      // generate html to render from inputValueArr
      let val = "<span>";
      if (this.inputValueArr.length) {
        for (let i = 0; i < this.inputValueArr.length; i++) {
          val += this.inputValueArr[i];
        }
      } else {
        val += "Enter some text";
      }
      val += "</span>";
      return val;
    },
    ...mapState(["alphaNumbers", "actionKeys", "splChars"]),
    activeInputKeys: {
      get: function() {
        return this.isSplCharPressed ? this.splChars : this.alphaNumbers;
      },
      set: function() {}
    }
  },
  methods: {
    isInputAlphabet(input) {
      return input.type == "alphabet";
    },
    getActiveValue(input) {
      return this.isCapitalize && this.isInputAlphabet(input)
        ? input.capitalizeValue
        : input.value;
    },
    getCssClass(input) {
      let isActive = false;
      switch (input.type) {
        case "capsLock":
          isActive = this.isCapsLockPressed;
          break;
        case "shift":
          isActive = this.isShiftPressed;
          break;
        case "toggle":
          isActive = this.isSplCharPressed;
          break;
      }
      return isActive ? "key isActive" : "key";
    },
    keyPressed(input) {
      if (this.normalKeyType.includes(input.type)) {
        this.addInput(input);
        this.doRandomRearrange();
      } else if (input.type == "del") {
        this.deleteLastChar();
      } else {
        this.toggleKey(input);
      }
    },
    toggleKey(input) {
      switch (input.type) {
        case "capsLock":
          this.isCapsLockPressed = !this.isCapsLockPressed;
          break;
        case "shift":
          this.isShiftPressed = !this.isShiftPressed;
          break;
        case "toggle":
          this.isSplCharPressed = !this.isSplCharPressed;
          break;
      }
    },
    deleteLastChar() {
      this.inputValueArr.pop();
    },
    addInput(input) {
      this.inputValueArr.push(this.getActiveValue(input));
    },
    doRandomRearrange() {
      // rearrange randomly activeInputKeys array
      this.activeInputKeys = utilityService.randomRearrange(
        this.activeInputKeys
      );
    }
  }
};
</script>
