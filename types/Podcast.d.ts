import { Enclosure } from './Enclosure';

export interface Podcast {
	title: String;
	pubDate: Number;
	link: String;
	guid: String;
	author: String;
	thumbnail: HTMLImageElement;
	description: HTMLElement;
	content: HTMLElement;
	enclosure: Enclosure;
	categories: Array<String>;
}
