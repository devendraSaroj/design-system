import styled from 'styled-components';

export const DialogWrapper = styled.div`
  /* ... */
  width: 750px;
  height: 550px;
  max-height: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(1, 10, 20, 0.1);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';

  span {
    margin-right: 10px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';

  span {
    font-size: 10px;
    letter-spacing: 1px;
    margin-right: 10px;
    line-height: 16px;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgba(62, 122, 252, 0.12);
`;

export const ProgressThumb = styled.div<{ width: number }>`
  height: 100%;
  background-color: rgb(62, 122, 252);
  width: ${(props) => props.width}%;
`;

export const DialogBody = styled.div`
  display: flex;
  flex: 1;
  padding: 0 24px;
  font-family: 'Poppins';
`;

export const FooterDiv = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 24px 16px 24px;
`;

export const FooterButtons = styled.div`
  display: flex;

  & :not(:first-child) {
    margin-left: 16px;
  }
`;
