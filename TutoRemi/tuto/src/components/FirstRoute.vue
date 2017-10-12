<template>
<div>
  <div class="firstRoute">
    <h1>{{ msg }}</h1>
    Oh Hi {{$route.params.name}}
  </div>
  <my-slot>
    <h1 slot="title">slot title</h1>
    <h1 slot="footer">slot footer</h1>
  </my-slot>
</div>
</template>

<script>

import mySlot from '@/components/mySlot';

export default {
  components: {
    'my-slot': mySlot,
  },
  name: 'FirstRoute',
  data() {
    return {
      msg: 'FIRST ROUTE MAAAAN',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
