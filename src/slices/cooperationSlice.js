import { createSlice } from '@reduxjs/toolkit';

// Ambil data dari local storage jika tersedia, jika tidak, gunakan array kosong sebagai default
const storedCountries = JSON.parse(localStorage.getItem('cooperationCountries')) || [];

// State awal untuk slice 'cooperation', diisi dengan data dari local storage
const initialState = {
  countries: storedCountries,
};

// Buat slice menggunakan Redux Toolkit
const cooperationSlice = createSlice({
  name: 'cooperation', // Nama slice
  initialState, // State awal
  reducers: {
    // Reducer untuk menambahkan negara ke daftar
    addCountry: (state, action) => {
      state.countries.push(action.payload); // Tambahkan negara ke array 'countries'
      // Simpan data terbaru ke local storage
      localStorage.setItem('cooperationCountries', JSON.stringify(state.countries));
    },
    // Reducer untuk menghapus negara dari daftar
    removeCountry: (state, action) => {
      state.countries = state.countries.filter(
        (country) => country.cca3 !== action.payload.cca3 // Hapus negara berdasarkan kode 'cca3'
      );
      // Simpan data terbaru ke local storage
      localStorage.setItem('cooperationCountries', JSON.stringify(state.countries));
    },
  },
});

// Ekspor actions agar bisa digunakan di komponen lain
export const { addCountry, removeCountry } = cooperationSlice.actions;
export default cooperationSlice.reducer;