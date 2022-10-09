<template>
  

  <!-- bagian upload dengan dropzone dan button  -->
  <div v-if="!uploading" class="dropzone">
    <div class="title">
      <h2>Upload your image</h2>
      <p class="text-muted">File should be Jpg, Png, & Jpeg...</p>
    </div>
    <!-- dropzone untuk upload -->
    <div 
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="dropFile"
      :class="{'active-dropzone': active}"
      class="drag-drop">
      <img src="@/assets/image.svg" alt="" class="d-block mx-auto rounded my-auto">

      <!-- untuk text jika tidak ada file yang di drag maka tidak aktif -->
      <p v-if="!active" class=" text-muted text-center">Drag your image here to upload</p>

      <!-- untuk text jika ada file yang di drag maka aktif -->
      <p v-else class=" text-muted text-center">Drop your image</p>

      <input type="file" id="uploadImg" name="image" ref="file" @change="sendfile" hidden>
    </div>
    <p class="text-muted mb-3 text-center fw-normal fs-4">or</p>
    

    <!-- button untuk openfile -->
    
    <div class="buttonfile items-center">
      <button class="btn btn-primary"   @click="$refs.file.click()" >Choose a file</button>
      <input type="file" ref="file" name="open-file" @change="openFile" hidden>
      
    </div>
  </div>


</template>

<script>

// import axios from 'axios';
import {ref} from "vue";

export default {
  name: 'DropzoneHome',
  
  data() {
    return { 
      // file: "",
      file: null,
      message: "",
      error: false,
      uploading: false,
      uploadedFiles: [],
      uploaded: false,
    };
  },

  methods: {

    // khusus untuk upload dari button choose file

    chooseFiles() {
      this.file = this.$refs.file.click();
      
     
      
    },

    // ------ untuk file yang sudah di drop  dengan event -------
    dropFile(e) {
      let dropImage = e.dataTransfer.files;
      if (!dropImage) return;
      this.file = dropImage[0];
      this.uploadFile();

    },

    // ------- untuk proses handle upload dari dropzone -----------
    sendFile() {
      this.file = this.$refs.file.files[0];
      this.uploadFile();
    },
    
    // --------- untuk proses handle dari button ---------
    openFile() {
      this.file = this.$refs.file.files[0];
      this.uploadFile();
    },

    // ------- untuk validasi & emit -----
    uploadFile() {
      this.error = false;
      this.$emit('onFileUpload', this.file);
      
    },
    
  },

  setup() {
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };

    return {active, toggleActive};
  }
 
};
</script>

<style scoped lang="scss">
.drag-drop {
  border-radius: 18px;
  border: 2px dashed #00b5cc;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 10px;
  background: #e4f1fe;
}

.active-dropzone {
  border-color: #2286c3;
  background: #fff;
}


</style>
