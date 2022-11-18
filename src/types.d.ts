export interface Movie {
  id: string;
  name: string;
}

export interface MovieMutation {
  name: string;
}

export interface Joke {
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
  id: number;
}