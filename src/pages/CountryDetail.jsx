import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCountry } from '../slices/cooperationSlice';

const CountryDetail = () => {
  const { code } = useParams(); // Mengambil parameter kode negara dari URL
  const [country, setCountry] = useState(null); // State untuk menyimpan data negara yang diambil dari API
  const dispatch = useDispatch(); // Dispatch untuk aksi Redux
  const navigate = useNavigate(); // Hook untuk navigasi
  const [notification, setNotification] = useState({ message: '', success: null }); // State untuk notifikasi

  // Mengambil data negara dari API berdasarkan kode saat halaman dibuka
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]))
      .catch((error) => console.error('Error fetching country:', error));
  }, [code]);

  // Loading jika data negara belum/ tidak ada
  if (!country) {
    return <div className='mt-10 text-center font-spartan'>Loading...</div>;
  }

  // Fungsi untuk jalin kerja sama
  const handleCooperation = () => {
    if (Math.random() > 0.5) { // untuk menghasilkan tingkat keberhasilan 50%
      dispatch(addCountry(country)); // Menambahkan negara ke daftar kerja sama jika berhasil
      setNotification({ message: 'Anda Berhasil Menjalin Kerja Sama!', success: true });
    } else {
      setNotification({ message: 'Kerja Sama Gagal!', success: false });
    }
    setTimeout(() => {
      setNotification({ message: '', success: null });
    }, 3000);
  };

  return (
    // Button Kembali 
    <div className="max-w-lg p-6 mx-4 mt-10 mb-10 rounded-lg shadow-xl bg-slate-100 font-spartan md:max-w-xl lg:max-w-2xl sm:mx-auto">
      <div className="flex justify-start mb-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      {/* Detail informasi negara */}
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold text-center">{country.name?.common}</h1>
        <img src={country.flags?.svg} alt={`${country.name?.common} flag`} className="w-32 h-auto mx-auto mb-4 md:w-40 lg:w-48" />
        <div className="mb-4">
          <p className="text-base text-left md:text-lg"><strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
          <p className="text-base text-left md:text-lg"><strong>Region:</strong> {country.region}</p>
          <p className="text-base text-left md:text-lg"><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p className="text-base text-left md:text-lg"><strong>Independent:</strong> {country.independent ? 'Yes' : 'No'}</p>
          <p className="text-base text-left md:text-lg"><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
          <p className="text-base text-left md:text-lg">
            <strong>Currency:</strong>{' '}
            {country.currencies
              ? Object.values(country.currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(', ')
              : 'N/A'}
          </p>
          <p className="text-base text-left md:text-lg">
            <strong>Google Maps:</strong> <a href={country.maps?.googleMaps} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Google Maps</a>
          </p>
        </div>
        <img src={country.coatOfArms?.svg} alt={`${country.name?.common} coat of arms`} className="w-24 h-auto mx-auto mb-4 md:w-32 lg:w-40" />
        <button onClick={handleCooperation} className="px-6 py-2 mt-4 text-white bg-blue-700 hover:bg-blue-800 rounded-3xl">
          Offer Cooperation
        </button>
      </div>

      {/* Toast Notification Gagal atau Berhasil setelah klik button 'Offer Cooperation'*/}
      {notification.message && (
        <div
          className={`fixed z-50 flex items-center p-4 text-green-700 transition-transform transform bg-green-100 shadow-lg top-5 right-5 w-80 rounded-xl ${
            notification.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
          style={{ zIndex: 1000 }}
        >
          <div
            className={`mr-4 w-2 h-12 rounded-full ${
              notification.success ? 'bg-green-600' : 'bg-orange-500'
            }`}
          ></div>
          <div className="flex-1">
            <h4 className="text-lg font-bold">
              {notification.success ? 'Berhasil!' : 'Gagal!'}
            </h4>
            <p>{notification.message}</p>
          </div>
          <button
            onClick={() => setNotification({ message: '', success: null })}
            className="ml-4 text-lg font-bold text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;