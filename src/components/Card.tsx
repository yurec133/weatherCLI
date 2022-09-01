import React from 'react';
import styled from 'styled-components/native';
interface Props {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}
export const Card: React.FC<Props> = ({children, style}: Props) => {
  return <CardBox style={style}>{children}</CardBox>;
};
const CardBox = styled.View`
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
`;
