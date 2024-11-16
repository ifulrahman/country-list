import React from 'react';
import { Link } from 'react-router-dom';

// Component CountryCard menerima props 'country' untuk menampilkan data negara
const CountryCard = ({ country }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded shadow">
      {/* Nama negara dan bendera */}
      <div>
        <h2 className="text-lg font-bold">{country.name.common}</h2>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-10 h-6 mt-2" />
      </div>
      {/* Navigasi ke detail negara berdasarkan kode negara (cca3) */}
      <Link to={`/country/${country.cca3}`} className="text-gray-600">
        ➜
      </Link>
    </div>
  );
};

export default CountryCard;