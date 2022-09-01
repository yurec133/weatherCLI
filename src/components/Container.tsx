import React from 'react';
import styled from 'styled-components/native';
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const Container: React.FC<Props> = ({children}: Props) => {
  return <MainContainer>{children}</MainContainer>;
};
const MainContainer = styled.View`
  padding: 0 10px;
  flex: 1;
`;
