import { FeedData } from './FeedData';
import { Podcast } from './Podcast';

export interface Album {
	status: Boolean;
	feed: FeedData;
	items: Array<Podcast>;
}
