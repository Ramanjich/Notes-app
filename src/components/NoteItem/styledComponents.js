import styled from 'styled-components'

export const ItemsC = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 25%;
  border-style: solid;
  border-width: 2px;
  border-color: #cbd5e1;
  border-radius: 5px;
  padding: 10px;
  margin-left: 8px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    margin-left: 0px;
  }
`
export const ItemsCH = styled.h1`
  font-size: 19px;
  color: #334155;
`
export const ItemsCP = styled.p`
  font-size: 15px;
`
