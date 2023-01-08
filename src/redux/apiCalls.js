import { publicRequest } from "../requestMethod";
import { loginStart, loginSuccess, loginFailure } from "./userRedux";

export const login = async (dispatch, user) => {
  loginStart();
  try {
    const res = await publicRequest.post("/auth/login", { data: user });
    dispatch(loginSuccess(res.data));
    console.log("api call done!");
  } catch (error) {
    dispatch(loginFailure());
  }
};
