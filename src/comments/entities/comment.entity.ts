export class Comment {
  id: string;
  postId: string;
  content: string;
  creatorId: string;
  creatorImage: string;
  creatorName: string;
  image?: string[];
  createdAt?: Date;
}
