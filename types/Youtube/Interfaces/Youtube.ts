//
// export interface Youtube {
//   kind: string | undefined;
//   etag: string | undefined;
//   nextPage: string | undefined;
//   prevPage: string | undefined;
//   pageInfo: string | undefined;
//   items: string | undefined;
// }
export interface YoutubeParams {
  part: string,
  q: string,
  key: string
  channelId?: string,
  channelType?: string,
  eventType?: string,
  maxResults?: number,
  onBehalfOfContentOwner?: string,
  order?: string,
  pageToken?: string,
  publishedAfter?: Date,
  publishedBefore?: Date,
  regionCode?: string,
  safeSearch?: string,
  type?: string,
  videoCaption?: string,
  videoCategoryId?: string,
  videoDefinition?: string,
  videoDimension?: string,
  videoDuration?: string,
  videoEmbeddable?: string,
  videoLicense?: string,
  videoSyndicated?: string,
  videoType?: string,
}

export interface Youtube {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard?: Standard;
  maxres?: Maxres;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export interface YoutubeVideoParams {
  part: string;
  chart?: string;
  id: string;
  myRating?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  regionCode?: string;
  videoCategoryId?: string;
  key: string;
}

export interface YoutubeVideoData {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: VideoItem[];
}

export interface ContentRating {
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: string;
}
export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Player {
  embedHtml: string;
}

export interface Localized {
  title: string;
  description: string;
}

export interface SnippetVideo {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetVideo;
  contentDetails: ContentDetails;
  statistics: Statistics;
  player: Player;
}
