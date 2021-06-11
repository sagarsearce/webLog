export interface IBlog {
  id: number,
  title: string;
  content: string;
  readTime: string;
  author: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface InavLink {
  displayText: string,
  href: string
}