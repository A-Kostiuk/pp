import styled, { css } from 'styled-components';
import { P, Ul } from '../../styled';

interface IBreadcrumbsList {
  $marginBottom?: number;
}

export const BreadcrumbsList = styled(Ul)<IBreadcrumbsList>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: ${props => props.$marginBottom ? `${props.$marginBottom}px` : 0};
`;

const breadcrumbStyles = css`
  padding: 5px 30px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
`;

export const BreadcrumbLink = styled.a`
  cursor: pointer;
  transition: .2s;
  ${breadcrumbStyles};
  display: block;
  background-color: ${props => props.theme.colors.btnBackground};
  color: ${props => props.theme.colors.secondary};


  :hover {
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${props => props.theme.colors.baseWhite};
  }
`;

export const CurrentLocation = styled(P)`
  ${breadcrumbStyles};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.baseWhite};
`;

export const PreviousPage = styled.button`
  transition: 0.2s;
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.btnBackground};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    background-color: ${props => props.theme.colors.secondary};

    svg path {
      fill: ${props => props.theme.colors.baseWhite};
    }
  }
`;
