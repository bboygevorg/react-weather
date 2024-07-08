import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CityState {
  searchCity: string;
  weatherData: any;
  loading: boolean;
  error: string | null;
}

const initialState: CityState = {
  searchCity: "",
  weatherData: null,
  loading: false,
  error: null,
};

export const fetchWeatherData = createAsyncThunk(
  "city/fetchWeatherData",
  async (city: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aefed3b594c20588c1bdeae497bde77b`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching weather data");
    }
  }
);

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setSearchCity: (state, action) => {
      state.searchCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching weather data";
      });
  },
});

export const { setSearchCity } = citySlice.actions;

export const selectCity = (state: any) => state.city;

export default citySlice.reducer;
