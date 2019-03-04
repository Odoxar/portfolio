export interface Smart {
  rows: {
    content:
      {
        title?: string,
        description: string,
      }[],
    images: string[]
  }[],
  examples: {
    title: string;
    subtitle: string;
    list: string[];
  }[];
}
