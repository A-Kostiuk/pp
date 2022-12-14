import styled from 'styled-components';
import { Ul } from '../../styled';

export const Wrapper = styled.div`
  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    position: relative;
    width: 100%;
    flex: auto;
    border-radius: 20px;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
  }
`;

export const PhotosPatternStyled = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  li {
    border-radius: 20px;
    overflow: hidden;
  }

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    overflow-y: auto;

    li {
      height: 140px;
      background: ${props => props.theme.colors.grey100};
    }

    li:nth-child(10n+1), li:nth-child(8n+8) {
      grid-row: span 2;
      height: 300px;
    }

    li:nth-child(5n+4) {
      grid-row: span 2;
      grid-column: span 2;
      height: 300px;
    }
  }
`;
