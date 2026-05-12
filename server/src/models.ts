export type TrackModel = {
  id: string;
  title: string;
  authorId: string; // remember to research about that
  thumbnail: string;
  length: number;
  modulesCount: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};
