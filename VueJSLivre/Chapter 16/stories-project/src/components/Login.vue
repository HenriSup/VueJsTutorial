<template>
  <div id="login">
    <h2>Sign in</h2>
    <form action="">
      <input type="email" placeholder="Email Address" class="form-control">
      <input type="password" placeholder="Password" class="form-control">
      <button class="btn">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  created () {
    console.log('login')
  }
}
</script>

