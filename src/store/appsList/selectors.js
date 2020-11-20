export const selectorStats = (state) => ({
    page: state.appsListState.page,
    count: state.appsListState.count
});

export const selectorApps = (state) => state.appsListState.apps;