import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const NavWrapper = styled.nav`
  height: 60px;
  text-align: center;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    li {
      flex-grow: 1;
    }
  }
`;
