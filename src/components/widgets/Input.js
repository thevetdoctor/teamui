import React from "react";
import styled from "styled-components";

export const InputStyle = styled.div`

  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid #afdeb1;
    padding: 12px 0 12px 12px;
    color: #43a047;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #afdeb1;
    }
  }

  
  textarea {
    width: 100%;
    border: 1px solid #AFDEB1;
    outline: none;
    color: #43a047;
    font-size: 16px;
    padding: 16px 0 16px 16px;
    transition: all 0.3s ease-out;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #afdeb1;
    }
  }

`;

const SelectInputStyle = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  background: #ffffff;
`;

const InputFieldStyle = styled(SelectInputStyle)`
  input,
  select {
    width: 100%;
    height: 100%;
    color: #43A047;
    padding: 12px 0 12px 12px;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }

    option {
      border: none;
      outline: none;
      padding: 16px 0 16px 16px;
    }

    ::placeholder {
      color: #7CBC7F;
    }
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle className={props.className}>
      <input
        ref={ref}
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required && true}
/>
    </InputStyle>
  );
});

export default Input;

export const TextArea = React.forwardRef((props, ref) => {
  return (
    <InputStyle className={props.className}>
      <textarea
        rows="10"
        ref={ref}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required && true}
       />
    </InputStyle>
  );
});

export const SelectInput = React.forwardRef((props, ref) => {
  return (
    <InputFieldStyle className="mb-4 py-2 px-4">
      <select ref={ref} onChange={props.onChange} name={props.name}>
        <option value="" className="capitalize">
          {props.placeholder}
        </option>
        {props.options.map((option, idx) => (
          <option key={idx} value={option} className="capitalize">
            {option}
          </option>
        ))}
      </select>
    </InputFieldStyle>
  );
});
