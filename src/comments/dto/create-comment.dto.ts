export class CreateCommentDto {
  postId: string;
  content: string;
  creatorId: string;
  creatorImage: string;
  creatorName: string;
  image?: string[];
}
