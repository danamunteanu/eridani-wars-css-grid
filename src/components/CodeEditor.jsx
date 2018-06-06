import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CodeEditor extends Component {
  render () {
    const { before, after, applyTreatmentStyle, nextLevel, onHandleChangeCodeArea, codeValue, textareaHeight } = this.props
    return (
      <div id='editor'>
        <div id='css'>
          <div className='line-numbers'>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14</div>
          <pre id='before'>{before}</pre>
          <textarea id='code' style={{height: textareaHeight}} value={codeValue} autoFocus onChange={(e) => { onHandleChangeCodeArea(e.target.value);applyTreatmentStyle(e.target.value) }}></textarea>
          <pre id='after'>{after}</pre>
        </div>
        <button id='next' className='translate' onClick={nextLevel}>Next</button>
      </div>
    )
  }
}

export default CodeEditor

CodeEditor.propTypes = {
  after: PropTypes.string,
  applyTreatmentStyle: PropTypes.func,
  before: PropTypes.string,
  codeValue: PropTypes.string,
  nextLevel: PropTypes.func,
  onHandleChangeCodeArea: PropTypes.func,
  textareaHeight: PropTypes.string
}
