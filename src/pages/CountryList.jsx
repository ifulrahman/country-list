import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import worldMap from '../assets/world-map.png';

const CountryList = () => {
  const [countries, setCountries] = useState([]); // State untuk menyimpan data negara yang diambil dari API

  // Ambil data negara dari API
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all') 
      .then((response) => response.json())
      .then((data) => setCountries(data)) // Menyimpan data negara ke state 'countries'
      .catch((error) => console.error('Error fetching countries:', error)); // Menangani error
  }, []);

  return (
    <div className="container p-4 mx-auto font-spartan">
      {/* World Map Image di Halaman Utama */}
      <div className="flex justify-center mb-4">
        <img src={worldMap} alt="World Map" className="h-auto w-96" />
      </div>
      
      <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">Pilih Negara!</h1>
      
      {/* Menampilkan daftar negara dalam grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          // Menggunakan komponen CountryCard untuk menampilkan setiap negara
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;