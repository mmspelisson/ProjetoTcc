import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #151F6D; 
  box-shadow: 0 0 20px 3px;
  padding-left: 20px; 
  padding-right: 20px; 

  > svg {
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  > img {
    width: 100px;
    height: auto; 
    margin-right: 20px; 
    margin-left: 20px; 
  }

  .sidebar-open {
    overflow-x: hidden; 
  }

  .sidebar-open main {
    transform: translateX(250px); 
    transition: transform 0.3s ease; 
  }
`
