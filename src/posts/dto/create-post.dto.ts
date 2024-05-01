export class CreatePostDto {
  creatorId: string;
  creatorName: string;
  creatorPhoto: string;
  content: string;
  images?: string[];
}
