export const selectUser = state => state.auth.user.name;
export const selectIsAuthorized = state => state.auth.isAuthorized;
export const selectIsRefreshing = state => state.auth.isRefreshing;
