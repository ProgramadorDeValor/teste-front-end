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
