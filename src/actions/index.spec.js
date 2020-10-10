import * as actions from "./index";

describe("todo actions", () => {
    it("setSelectedMovieId should create SET_SELECTED_MOVIE_ID action", () => {
        expect(actions.setSelectedMovieId(91)).toEqual({
            type: "SET_SELECTED_MOVIE_ID",
            id: 91
        });
    });
});
