import {createSelector} from "reselect";

const directoryState = state => state.directory;

export const selectSections = createSelector(
    [directoryState],
    directory => directory.sections
);