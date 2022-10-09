<template>
    <!-- diambil datanya dari DropzoneHome -->
    <!-- isi loading-bar  -->
    <div class="uploading">
        <h2>Uploading ...</h2>
        <!-- <div class="progress" style="height: 5px;">
          
            <div class="progress-bar w-0" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100"></div>
        </div> -->
        <div class="progress-bar mb-6"></div>
    </div>
</template>


<script>
    export default {
        name: 'LoaDing',
    };

</script>

<style lang="scss" scoped>

h2 {
  margin-right: auto;
}

.progress-bar.progress-bar:before{
  z-index: 1;
  height: 8px;
  width: 50%;
  margin: 0;
  border-radius: 500px;
}

.progress-bar{
  z-index: 1;
  border-radius: 500px;
  background-color: #F2F2F2;
  display: flex;
  overflow: hidden;

}

.progress-bar:before{
  background-color: #2F80ED;
  content: '';
  -webkit-animation: load 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation: load 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@-webkit-keyframes load {
  0% { margin-left: 0px; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0%; }
  100% { margin-left: 100%; margin-right: 0; }
}


@keyframes load {
  0% { margin-left: 0px; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0%; }
  100% { margin-left: 100%; margin-right: 0%; }
}


</style>