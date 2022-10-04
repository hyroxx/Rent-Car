<template>
  <div >
    <TheNavbar/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
  import globalComponent from "./components/globalComponent";
export default {
  components:{
    ...globalComponent,
}
}
</script>
<style>

</style>