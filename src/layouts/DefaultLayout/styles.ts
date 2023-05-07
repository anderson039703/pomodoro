import styled from 'styled-components'

export const LayoutContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  padding: 2.5rem;

  background: ${(props) => props.theme.gray800};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
