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
  &:hover {
    color: #40a9ff;
  }
  @media (min-width: 320px) and (max-width: 576px) {
    font-size: 3vw;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 3vw;
  }
`;

export const StyleLink = styled(Link)`
  color: #4d4d4d;
  @media (min-width: 320px) and (max-width: 576px) {
    font-size: 3vw;
  }
  @media (min-width: 1800px) {
    font-size: 23px;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 3vw;
  }
`;

export const StyleH5 = styled.h5`
  display: inline-block;
  padding-bottom: 5px;
  position: initial;
  margin-bottom: 25px;
  @media (min-width: 1800px) {
    font-size: 26px;
  }
`;

export const StyleP = styled.p`
  display: block;
  margin: 0 0 0px;
  color: #4d4d4d;
  position: relative;
  left: -18px;
  top: 5%;
  font-size: 1rem;
  padding-bottom: 15%;
  text-align: justify;

  @media (min-width: 1800px) {
    font-size: 20px;
  }
  @media (min-width: 320px) and (max-width: 576px) {
    font-size: 2.5vw;
  }

  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 2.5vw;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 0.8rem;
    top: 12%;
  }
`;

export const ArrowStyle = styled.div`
  position: absolute;
  bottom: 12px;
  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    bottom: 0;
  }
`;

export const StyleP2 = styled.p`
  margin-bottom: 0;
  font-size: 1vw;
  color: #686868;
  @media (min-width: 1800px) {
    font-size: 23px;
  }
  @media (min-width: 320px) and (max-width: 576px) {
    font-size: 9px;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 2vw;
  }
`;
