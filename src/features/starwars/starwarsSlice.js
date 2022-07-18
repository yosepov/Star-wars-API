import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  people: [],
  starships: [],
  planets: [],
};

export const starwarsSlice = createSlice({
  name: 'starwars',
  initialState,
  reducers: {
    setPeople: (state, action) => {
      state.people = action.payload;
    },
    setUpdatedPeople: (state, action) => {
      state.people[action.payload.index] = action.payload;
    },
    setAddPeople: (state, action) => {
      state.people.push(action.payload);
    },
    setAddPlanets: (state, action) => {
      state.planets.push(action.payload);
    },
    setAddStarships: (state, action) => {
      state.starships.push(action.payload);
    },
    setDeletedPeople: (state, action) => {
      state.people.splice(action.payload, 1);
    },
    setUpdatedStarships: (state, action) => {
      state.starships[action.payload.index] = action.payload;
    },
    setDeletedStarships: (state, action) => {
      state.starships.splice(action.payload, 1);
    },
    setUpdatedPlanets: (state, action) => {
      state.planets[action.payload.index] = action.payload;
    },
    setDeletedPlanets: (state, action) => {
      state.planets.splice(action.payload, 1);
    },
    setStarship: (state, action) => {
      state.starships = action.payload;
    },
    setPlanets: (state, action) => {
      state.planets = action.payload;
    },
  },
});

export const { setPlanets, setStarship, setPeople, setUpdatedPeople, setAddStarships, setAddPlanets, setAddPeople, setDeletedPeople, setUpdatedPlanets, setDeletedPlanets, setUpdatedStarships, setDeletedStarships } = starwarsSlice.actions;

export const selectPeople = (state) => state.starwars.people;
export const selectStarships = (state) => state.starwars.starships;
export const selectPlanets = (state) => state.starwars.planets;


export default starwarsSlice.reducer;
