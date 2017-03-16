import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'

class FileEditor extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      code: this.props.file.code || ''
    }
  }
  render () {
    var options = {
      lineNumbers: true
    }
    return <CodeMirror value={this.props.file.code || this.state.code} onChange={code => this.setState({ code })} options={options} />
  }
}

export default FileEditor
