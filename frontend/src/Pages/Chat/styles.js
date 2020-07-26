import styled from 'styled-components';
import background from '../../assets/Untitled.png';
import shape from '../../assets/shape.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${background}) no-repeat top;
  background-size: cover;
  
  @media (max-width: 425px) {
    background: url(${shape}) no-repeat bottom;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:rgba(219, 130, 130, 0.089);
  border-radius: 4px 4px 4px 4px ;
  height: 650px;
  width: 600px;
  box-shadow: -40px 40px 30px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 1024px) {
    width: 450px;
    height: 600px;
  }

  @media (max-width: 768px) {
    margin-left: -305px;
    width: 500px;
    height: 600px;
    margin-top: 80px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
    box-shadow: none;
    margin-top: 0;
    margin-right: -55px;
  }
  
  @media (max-width: 375px) {
    width: 100%;
    height: 100%;
    box-shadow: none;
    margin-top: 0;
  } 
`;