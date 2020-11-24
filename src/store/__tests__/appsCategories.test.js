import {appsCategoriesReducer} from "../appsCategories/reducer";
import {setPageCreator} from "../appsCategories/actions";

const initialState = {
    selectedPage: 'All'
}

let newState = (state, action) => {
    return appsCategoriesReducer(state, action);
}

describe('apps categories reducer', () => {
    test('set selected page', () => {
        const payload = 'Food';
        const action = setPageCreator(payload);
        expect(newState(initialState, action).selectedPage).toBe(payload);
    })
})