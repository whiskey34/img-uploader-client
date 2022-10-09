<template>
  <!-- untuk preview setelah image berhasil terupload -->
  <div class="preview-img">
      <div class="header mb-3">
        <div class="icon-success mb-2">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h2>Uploaded Successfully!</h2>
      </div>
      <div class="uploaded-img mb-3">
        
        <img :src="linkFile" alt="" class="rounded img-fluid">
      </div>
      

      <div class="copy-url mb-3">

        <!-- form url untuk di copy -->
        <div class="input-group">
          <!-- <p class="copy-text" id="copy-url">{{ linkFile }}</p> -->
          
          
            <a :href="linkFile" class="text-dark" target="_blank" rel="noopener noreferrer" ref="mylink">
              {{ linkFile }}
            </a>
          
          <button class="btn btn-primary"  @click="copyURL()">copy url</button>
        </div>

      </div>
  </div>

  <p class="text-muted text-sm">*PS: Demo Purposes Only</p>
</template>
  
<script>

  export default {
    name: 'PreView',
    props: ['linkFile'],
    data() {
      return {
        uploadedFiles: [],
        url: '',
        
      };
    },

    methods: {
      copyURL() {
        this.selectText(this.$refs.mylink); // e.g. <div ref="text">
        document.execCommand("copy");
        
      },

      selectText(element) {
        var range;
        if (document.selection) {
          // IE
          range = document.body.createTextRange();
          range.moveToElementText(element);
          range.select();
        } else if (window.getSelection) {
          range = document.createRange();
          range.selectNode(element);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
        }
}
    }
    

    
  }
</script>
  
<style scoped lang="scss">
//style for preview
.icon-success i {
  color: #66BB6A;
  font-size: 3.5em;
  text-shadow: 2px 2px 2px #ccc;
}

.img-preview {
  border: 2px solid #ccc;
  background-color: white;
  display: flex;
  height: 250px;
  border-radius: 18px;
}

.text-dark {
  // word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  width: 320px;
  
}

</style>