import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SpanStyle = styled.span`
  color: #d47e38;
  margin-right: 10px;
`;

export const StyleP1 = styled.p`
  display: block;
  margin: 0 0 15px;
  color: #4d4d4d;
`;

export const StyleLink = styled(Link)`
  color: #4d4d4d;
`;

export const StyleH5 = styled.h5`
  display: inline-block;
  padding-bottom: 5px;
  position: initial;
  margin-bottom: 25px;
`;

export const StyleP = styled.p`
  display: block;
  margin: 0 0 0px;
  color: #4d4d4d;
  position: relative;
  top: -59px;
  left: 11px;
`;

export const ArrowStyle = styled.div`
  & > i {
    color: #5d5b5b;
    display: inline-block;
    padding-left: 20%;
    font-size: 16px;
  }
`;
