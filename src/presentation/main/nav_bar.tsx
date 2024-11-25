import React from 'react';
import { Avatar, Pane, Text } from 'evergreen-ui';

const NavBar = () => (
  <Pane
    display='flex'
    width='100vw'
    alignItems='center'
    justifyContent='center'
    flexDirection='row'
    borderBottom
    clearfix
  >
    <Pane flex={1} height={60} alignItems='center' display='flex'>
      <Text>FTH</Text>
    </Pane>

    <Pane>
      <Avatar name='Bruno Arueira' />
    </Pane>
  </Pane>
)

export default NavBar;
