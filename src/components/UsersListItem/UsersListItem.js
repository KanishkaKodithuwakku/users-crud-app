import React from "react";
import styled from "styled-components";
import Button from "../Buttons";

const Item = styled.li`
  font-weight: var(--font-weight-normal);
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UsersListItem = ({ children, handleDelete }) => {
  return (
    <Item>
      <Flex>
        {children}
        <Flex>
          <Button handleOnClick={handleDelete} btnText={`Edit`} />
          <Button handleOnClick={handleDelete} btnText={`Delete`} />
        </Flex>
      </Flex>
    </Item>
  );
};

export default UsersListItem;
