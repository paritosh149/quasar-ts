<template>
  <q-page class="flex flex-center">
    <img src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class PageIndex extends Vue {
  @Prop() private msg!: string;
}
</script>
