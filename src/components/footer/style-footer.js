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
  font-size: 1rem;
  &:hover {
    color: #40a9ff;
  }
  @media (min-width: 1441px) {
    font-size: 1.6rem;
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

  @media (min-width: 1441px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    top: 12%;
    font-size: 0.8rem;
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
  @media (min-width: 1441px) {
    font-size: 23px;
  }
  @media (min-width: 320px) and (max-width: 576px) {
    font-size: 9px;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 2vw;
  }
`;

export const ImgF = styled.img`
  position: relative;
  width: 50%;
  left: -18px;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 576px) {
    width: 40%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    width: 30%;
  }
`;
