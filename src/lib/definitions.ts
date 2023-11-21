export type Error = {
  response: {
    data: {
      message: string;
    };
  };
  message: string;
};

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};
