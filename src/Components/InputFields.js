import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    input: {
      margin: '18px 0px'
    }
}

const InputFields = (props) => {
    return (
    <div className="input-boxes">
    <form onSubmit={(e) => e.preventDefault()}>
      <TextField
        fullWidth={true}
        type="number"
        hintText="Weight"
        onChange={props.onWeightChange}
        />       
      <TextField
        style={styles.input}
        fullWidth={true}
        type="number"
        onChange={props.onHeightChange}
        hintText="Height"
        />
      <RaisedButton 
        type="submit"
        onClick={props.generateBMI} 
        className="raisedButton"
        label="Calculate" 
        fullWidth={true} />
    </form>
  </div>
    )
}

export default InputFields;