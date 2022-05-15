export type Project = {
  id: number;
  title: string;
  images: { url: string; title: string }[];
  thumbnail: string;
  tech: { [key: string]: string };
  description: string;
};
