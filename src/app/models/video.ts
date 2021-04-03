export interface Video {
  id: string;
  title: string;
  viewCount?: string;
  likeCount: string;
  publishedAt: string;
  thumbnail: string;
  favorite?: boolean;
  youtubeVideo?: boolean;
  vimeoVideo?: boolean;
}
