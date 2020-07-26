import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  color: #111;
  height: 60%;
  justify-content: space-between;
  padding: 50px;
  
  > h2 {
    margin: 10px 0 10px 65px;
  }
  
  @media (max-width: 1440px) {
    margin-right: 40px;
  }

  @media (max-width: 1024px) {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    h2 {
      display: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 30px;
  
  > h1 {
    font-size:50px;
    margin-top: -60px;
    margin-left: -70px;
  }

  > img {
    height: 160px;
    width: 250px;
    margin-top: -130px;
  }
   
  @media (max-width: 1440px) {
    padding: 0;
    
    img {
      height: 180px;
      width: 260px;
      margin-top: -145px;
    }

    h1 {
      margin-top: -70px;
      margin-left: -60px;
      font-size: 45px;
    }
  }

  @media (max-width: 1024px) {
    padding: 0;
    
    img {
      height: 140px;
      width: 200px;
      margin-top: -135px;
    }

    h1 {
      margin-top: -70px;
      margin-left: -50px;
      font-size: 35px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 160px;
      width: 230px;
      margin-top: -180px;
      margin-right:-110px;
      margin-left: 130px;
    }

    h1 {
      display: none;
    }
  }

  @media (max-width: 425px) {
    img {
      height: 160px;
      width: 230px;
      margin-top: 100px;
      opacity: 0.2;
    }
  }

  @media (max-width: 375px) {
    img {
      height: 160px;
      width: 230px;
      opacity: 0.2;
    }
  }
`;

export const Room = styled.div`
  margin-left: 50px;
  display:flex;
  
  > h1 {
    margin: 0;
  }

  > img {
    height: 35px;
    width: 35px;
    opacity: 0.7;
    margin:0;
    padding: 3px;
  }

   @media (max-width: 2560px) {
    
    h1 {
      margin: 0;
      font-size: 40px;
    }

    img {
      height: 40px;
      width: 40px;
      opacity: 0.7;
      margin:0;
      padding: 3px;
    }
  } 

  @media (max-width: 1024px) {
    h1, img {
      margin-top: 40px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      display: none;
    }

    img {
      display: none;
    }
  }
`;

export const Users = styled.div`
  margin-left: 50px;
  display: flex;
  
  > h1 {
    margin: 0;
  }

  > img {
      height: 35px;
      width: 35px;
      opacity: 0.7;
      margin:0;
      padding: 3px;
    }

    @media (max-width: 2560px) {
    
    h1 {
      margin: 0;
      font-size: 40px;
    }
    
    img {
      height: 40px;
      width: 40px;
      opacity: 0.7;
      margin:0;
      padding: 3px;
    }
  }
   
  @media (max-width: 768px) {
    h1 {
      display: none;
    }
    
    img {
      display: none;
    }
  }
`;

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 450px;
`;

export const ActiveItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0  0 65px;
`;