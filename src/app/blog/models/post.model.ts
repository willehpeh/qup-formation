export class Post {
  id?: string;
  userId?: string;
  title!: string;
  content!: string;
  comments?: string[];
  created!: Date;
}
