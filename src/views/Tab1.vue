<template>
  <explore-container name="Tab 1 page" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ExploreContainer from '@/components/ExploreContainer.vue'

export default defineComponent({
  name: 'Tab1',
  components: { ExploreContainer },
})
</script>
