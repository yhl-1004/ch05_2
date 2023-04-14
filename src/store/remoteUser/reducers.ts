import * as T from "./types";

const initialState: T.State = {
  email: "",
  name: "",
  uuid: "",
  jobTitle: "",
  avatar: "",
  // picture:{large : ''}
};

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  return state;
};
