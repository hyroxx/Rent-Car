<template>
  <div class="footer"> 
    <div class="linkGroup"> 
      <a>link 1</a>
      <a>link 1</a>
      <a>link 1</a>
    </div>
    <div  class="linkGroup"> 
      <a>link 1</a>
      <a>link 1</a>
      <a>link 1</a>
    </div>
    <div  class="linkGroup"> 
      <a>link 1</a>
      <a>link 1</a>
      <a>link 1</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around ;
    background-color: #555555;
    width: 100%;
    height: 200px;
    padding-left: 100px;
    padding-top: 50px;
}
.linkGroup{
  display: flex;
  flex-direction: column;
  color:antiquewhite;
}
</style>