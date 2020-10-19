import React, {forwardRef, useImperativeHandle} from 'react';

import TextField from '@material-ui/core/TextField';


//wrap component in forwardRef
const InputField = forwardRef((props, ref) => {
  const [value, setValue ] = React.useState('');
  const [error, setError] = React.useState('');

  // store the events and pass them on to the State
  const handleChange = (event) => {
    setValue(event.target.value)
    //SetError empty after each keystroke so the error message doesn't stay while typing
    setError("");
    props.onChange(event.target.name, event.target.value)
  }

  // Check is input fields are within requirements
  const validate = () => {
    // return true if it's valid
    if(props.validation) {
      // split each given argument divded by a "|"
      const rules = props.validation.split("|")

      for(let i = 0; i< rules.length; i++){
        const current = rules[0];

        if(current === "required"){
          if(!value) {
            setError("This field is required")
            return false;
          }
        }

      //compares value with password if "equal" argument is given
      //  if(current === "equal"){
      //    if(value !== inputRefs.current[1].current.value)
      //    setError("password don't match")
      //    return false;
      //  }

        // split the argument itself divded by ":"
        // pair[0] is before the :, pair[1] is after the :
        const pair = current.split(":")
        switch(pair[0]){
          case "min":
            if(value.length < pair[1]) {
              setError(`this field must be at least ${pair[1]} characters long`)
              return false;
            }
            break;
          case "max":
            if(value.length > pair[1]) {
              setError(`this field must be no longer than ${pair[1]} characters`)
              return false;
            }
            break;
          default:
            break;
        }
      }
    }
    return true;
  }

  // Adds a validate function to the InputField component
  useImperativeHandle(ref, () => {
    return {
      validate: () => validate()
    }
  })

  return (
    <div className='input-field'>
      {props.label && (
        <label>{props.label}</label>
      )}
      <TextField
      fullWidth
      placeholder={props.placeholder}
      name={props.name}
      // Use an onChange that passes on the event to the HandleChange constant.
      onChange={(event) => handleChange(event)}
      type={props.type}
      // if props.value is empty it will use the empty string, if not use value Hook from local state
      value={props.value ? props.value : value}
      autoComplete={props.autoComplete}
      />
      {error && (<p className={error}>{error}</p> )}
    </div>
  )
})

InputField.defaultProps = {
  placeholder: '',
  name: '',
  type: 'text',
  value: '',
  autoComplete: 'off',
  label: '',
  validation: '',
}

export default InputField;
