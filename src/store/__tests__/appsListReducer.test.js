import {appsListReducer} from "../appsList/reducer";
import {setAppsCreator, setStatsCreator} from "../appsList/actions";

const initialState = {
    isLoading: false,
    page: 0,
    count: 2,
    apps: []
}

let newState = (state, action) => {
    return appsListReducer(state, action);
}

describe('apps list reducer', () => {
    test('set page and count', () => {
        const payload = {
            page: 0,
            count: 10
        }
        const action = setStatsCreator(payload);
        expect(newState(initialState, action).page).toBe(payload.page);
        expect(newState(initialState, action).count).toBe(payload.count);
    });

    test('set apps', () => {
        const payload = [
            {
                name: "App",
                genre: "Test",
                img: "https://app2top.ru/wp-content/uploads/2019/05/PUBG-MOBILE-0.4.0-1024x725.jpg",
                description: "App description test text test text App description test text test text App description test text test text"
            }
        ];
        const action = setAppsCreator(payload);
        expect(newState(initialState, action).apps).toBe(payload);
    });
});