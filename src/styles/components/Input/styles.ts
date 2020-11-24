import styled from 'styled-components'

export const InputField = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 10px;

  label {
    margin-right: 7px;
    background-color: var(--surface);
    padding: 7px 6px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;
    box-shadow: 0 1px 3px 0 #050505;
    transition: 0.2s ease-in-out;
  }

  input {
    display: flex;
    flex: 1;
    font-size: 18px;
    border: 2px solid #999;
    outline: none;
    padding: 5px 4px;
    border-radius: 3px;
    color: var(--text-color);
    background: transparent;
    box-sizing: border-box;
    transition: 0.2s ease-in-out;

    &:valid,
    &:focus {
      border: 2px solid var(--primary);

      & + label {
        background-color: var(--primary);
        color: #222;
      }
    }
  }
`
