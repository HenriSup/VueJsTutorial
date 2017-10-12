<template>
  <div id="login" class="justify-content-md-center">
    <h2>Sign in</h2>
    <form action="" class="col-sm-2 col-sm-offset-5">
      <div class="form-group">
        <input type="email" placeholder="Email Address" class="form-control">
        <input type="password" placeholder="Password" class="form-control">
      </div>
      <button type="submit" class="btn">Sign in</button>
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

