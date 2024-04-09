export class Post {
  id: string
  creatorId: string
  creatorName: string
  creatorPhoto: string
  date: Date
  content: string
  images: string[]
  comments: number
  likes: number
  likesIds: string[]
  shares: number
}
