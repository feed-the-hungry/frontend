import React, { useState } from 'react';
import { Card, EmptyState, HandUpIcon, Pane, Text, Badge } from 'evergreen-ui';
import { Feed } from '../../domain';
import { FeedsService, FeedEntriesService } from '../../services';

const service = new FeedsService.Fetch();
const entryService = new FeedEntriesService.Fetch();

const FeedList = (props: any) => {
  const feeds = service.all();

  return (
    <Pane
      width='20vw'
      maxWidth='20vw'
      alignItems='left'
      display='flex'
      flexDirection='column'
      borderRight
    >
      {feeds.map((feed) => (
        <Pane display='flex' flexDirection='row'>
          <Pane flex={1} alignItems='left' display='flex' width='70vw'>
            <Text onClick={() => props.selectFeed(feed)} cursor='pointer'>
              {feed.name}
            </Text>
          </Pane>

          <Pane>
            <Badge color="neutral">0</Badge>
          </Pane>
        </Pane>
      ))}
    </Pane>
  )
};

interface EntryListProps {
  feedId?: string;
}

const EntryList = ({ feedId }: EntryListProps) => {
  const entries = entryService.findBy({ feedId });

  return (
    <Pane width='80vw' alignItems='center' display='flex' height='auto'>
      {entries.length === 0 ?
        <EmptyState
          background="light"
          title="Yay! Looks like you've read all your feed!"
          orientation="vertical"
          icon={<HandUpIcon color="#C1C4D6" />}
          iconBgColor="#EDEFF5"
        /> :
          entries.map((entry) => (
            <Card>
              {entry.content}
            </Card>
          ))}
    </Pane>
  )
};

const FeedReader = () => {
  const [feed, setFeed] = useState<Feed | null>(null);

  return (
    <Pane
      display='flex'
      height='100vh'
      flexDirection='row'
      justifyContent='center'
    >
      <FeedList selectFeed={setFeed} />

      <EntryList feedId={feed?.id} />
    </Pane>
  )
};

export default FeedReader;
