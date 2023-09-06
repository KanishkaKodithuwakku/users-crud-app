import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const SpaceBetween = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
`;
