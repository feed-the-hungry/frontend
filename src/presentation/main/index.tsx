import React, { Component } from 'react';
import { Pane } from 'evergreen-ui'

import NavBar from './nav_bar';
import FeedReader from './feed_reader';

class Main extends Component {
  render() {
    return (
      <Pane
        display='flex'
        alignItems='left'
        flexDirection='column'
        justifyContent='center'
        width='100%'
      >
        <NavBar />

        <FeedReader />
      </Pane>
    );
  }
}

export default Main;
