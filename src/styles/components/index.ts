import styled from 'styled-components'

export const Body = styled.div`
  width: 90vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

export const Content = styled.div`
  margin-top: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.p`
  width: 100%;
  border-radius: 3px;
  padding: 16px 8px;
  font-size: 14px;
  background-color: var(--surface);
  box-shadow: 0 1px 3px 0 #050505;

  &:hover {
    background-color: #212121;
    box-shadow: 0 2px 5px 0 #050505;
  }
`
