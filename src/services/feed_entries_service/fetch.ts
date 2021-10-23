import { FeedEntry } from '../../domain';

const entries = [
	new FeedEntry('0', '0', 'Something'),
	new FeedEntry('1', '0', 'Foo'),
	new FeedEntry('2', '0', 'Bar'),
	new FeedEntry('3', '1', 'Baz'),
	new FeedEntry('4', '1', 'Another')
];

export interface FetchFindByProps {
	feedId?: string;
}

export interface Fetch {
	findBy(prop: FetchFindByProps): FeedEntry[];
}

class FetchImpl implements Fetch {
	findBy(prop: FetchFindByProps): FeedEntry[] {
		return entries.filter((feedEntry) => feedEntry.feedId === prop.feedId);
	}
}

export default FetchImpl;
