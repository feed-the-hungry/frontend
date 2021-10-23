import { Feed } from '../../domain';

export interface Fetch {
	all(): Feed[];
}

class FetchImpl implements Fetch {
	all(): Feed[] {
		return [
			new Feed('0', 'Bruno Arueira', 'https://brunoarueira.com/feed.xml'),
			new Feed('1', 'Hacker News', 'https://news.ycombinator.com/news.xml')
		];
	}
}

export default FetchImpl;
