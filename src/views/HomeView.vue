<template>
  <div class="home container" @dragover.prevent @drop.prevent>
    <!-- untuk message error -->
    <!-- <div class="alert alert-warning" role="alert"></div> -->

      <DropzoneHome v-if="statusUpload === 'noimage'" @onFileUpload="sendFile"/>
      <LoaDing v-if="statusUpload === 'uploading'" />
      <PreView v-if="statusUpload === 'success'" :linkFile="linkFile"/>
      
      
  </div>
</template>

<script>
// @ is an alias to /src
import DropzoneHome from '@/components/DropzoneHome.vue';
import LoaDing from '@/components/LoaDing.vue';
import PreView from '@/components/PreView.vue';
import axios from "axios";




export default {
  name: 'HomeView',
  data() {
    return {
      statusUpload: 'noimage',
      linkFile: '',
      error: false,
      url: '',
    };
  },
  components: {
    DropzoneHome, // parent component
    LoaDing, // child component
    PreView // child component too !
},
methods: {
  sendFile(file) {
    this.error = false;
    this.statusUpload = "uploading";
    let form = new FormData();
    form.append("file", file);

    axios
      .post('https://uploader-devch-app.herokuapp.com/upload', form) // ini untuk mengupload ke cloud bikin jadi double upload
      .then(({ data }) => {
        this.linkFile = data.url;
        this.statusUpload = 'success';
      })
      .catch(() => {
        this.error = true;
        this.statusUpload = 'noimage';
      });
  },

  openFile(file) {
    this.error = false;
    this.statusUpload = "uploading";
    let formData = new FormData();
    formData.append("file", file);

    axios
      .post('https://uploader-devch-app.herokuapp.com/upload', formData) // ini untuk mengupload ke cloud bikin jadi double upload
      .then(({ data }) => {
        this.linkFile = data.url;
        this.statusUpload = 'success';
      })
      .catch(() => {
        this.error = true;
        this.statusUpload = 'noimage';
      });
  }
},
  
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 24px;
  max-width: 450px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 8px 24px #ccc;
  margin-bottom: 40px;
  padding: 20px;
  
}

</style>
