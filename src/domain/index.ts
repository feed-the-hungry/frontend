class Feed {
    constructor(id: string, name: string, url: string) {
	this.id = id;
        this.name = name;
        this.url = url;
    };
    id: string;
    name: string;
    url: string;
}

class FeedEntry {
    constructor(id: string, feedId: string, content: string) {
	this.id = id;
        this.feedId = feedId;
        this.content = content;
    }
    id: string;
    feedId: string;
    content: string;
}

export { Feed, FeedEntry }
