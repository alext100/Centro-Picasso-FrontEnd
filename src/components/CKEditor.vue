<template>
  <div>
    <h1 class="ma-10 pa-1">CK5 Editor</h1>
    <ckeditor :editor="editor" :v-bind="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script lang="ts">
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      data: "Warum gehen keine Parameter Optionen",

      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        toolbar: ["heading", "|", "bold", "italic", "|", "numberedList", "bulletedList"],

        language: "es",
      },
    };
  },
};
</script>
