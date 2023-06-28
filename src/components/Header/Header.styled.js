const { styled } = require('styled-components');

export const StyledHeader = styled.header`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
`;
