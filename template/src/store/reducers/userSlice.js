import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    userLoggedIn(state, { payload }) {
      state.user = payload;
    },
    userLoggedOut(state, { payload }) {
      state.user = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;

export const login =
  (user, cb = () => { }) =>
    async (dispatch) => {
      // TODO Call auth API
      dispatch(userLoggedIn(user));
      cb();
    };

export const logout = () => async (dispatch) => {
  dispatch(userLoggedOut());
};

export default userSlice.reducer;
