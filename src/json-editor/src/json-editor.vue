<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
// eslint-disable-next-line import/no-webpack-loader-syntax
require('script-loader!jsonlint')

export default {
  name: 'JsonEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'idea'
    }
  },
  data () {
    return {
      jsonEditor: false
    }
  },
  watch: {
    value (value) {
      const editorValue = this.jsonEditor.getValue()
      if (value !== editorValue) {
        this.jsonEditor.setValue(this.value)
      }
    },
    theme () {
      this.jsonEditor.setOption({
        theme: this.theme
      })
    }
  },
  mounted () {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'application/json',
      gutters: ['CodeMirror-lint-markers'],
      theme: this.theme || 'idea',
      readonly: this.readonly ? 'nocursor' : false,
      lint: true
    })
    this.jsonEditor.setValue(this.value)
    this.jsonEditor.on('change', (cm) => {
      const cmValue = cm.getValue()
      this.$emit('changed', cmValue)
      console.log('cmValueChange', cmValue)
      this.$emit('input', cmValue)
    })
  },
  methods: {
    getValue () {
      return this.jsonEditor.getValue()
    }
  }
}
</script>

<style scoped>
.json-editor {
  height: 100%;
  position: relative;
}
.json-editor >>> .CodeMirror {
  height: auto;
  min-height: 300px;
  text-align: left;
}
.json-editor >>> .CodeMirror-scroll {
  min-height: 300px;
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #f08047;
}
</style>
