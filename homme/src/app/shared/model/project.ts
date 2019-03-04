export interface Project {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  description: string;
  images: Image[]
}

export interface Image {
  src: string,
  title: string,
  visible: boolean
}
