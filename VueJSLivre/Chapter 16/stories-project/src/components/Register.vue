<template>
  <div id="register" class="col-sm-2 col-sm-offset-5">
    <h2>Register Form</h2>
    <form action="" >
      <div class="form-group">
        <input type="text" placeholder="First Name" class="form-control">
        <input type="text" placeholder="Last Name" class="form-control">
        <input type="text" placeholder="Email address" class="form-control">
        <input type="text" placeholder="Pick a Password" class="form-control">
        <input type="text" placeholder="Confirm password" class="form-control">
      </div>
      <button class="btn"> Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  created () {
    console.log('register')
  }
}
</script>


