import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCountry } from '../slices/cooperationSlice';

const CooperationList = () => {
  const countries = useSelector((state) => state.cooperation.countries); // Mengambil data negara dari state Redux
  const dispatch = useDispatch(); // Menggunakan dispatch untuk mengirim aksi Redux
  const [notification, setNotification] = useState(null); // State untuk notifikasi

  const handleRemove = (country) => {
    dispatch(removeCountry(country)); // Menghapus negara dari cooperation list menu menggunakan Redux action
    // Set notifikasi sukses
    setNotification({ message: 'Berhasil Membatalkan Kerja Sama!', success: true });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="container p-4 mx-auto font-spartan">
      <h1 className="text-2xl font-bold text-center text-gray-600 mt-7">Cooperation List</h1>
      {/* Toast Notification */}
      {notification && (
        <div className="fixed z-50 flex items-center p-4 text-green-700 transition-transform transform bg-green-100 shadow-lg top-5 right-5 w-80 rounded-xl">
          <div className="w-2 h-12 mr-4 bg-green-600 rounded-full"></div>
          <div className="flex-1">
            <h4 className="text-lg font-bold">Berhasil!</h4>
            <p>{notification.message}</p>
          </div>
          {/* Tombol X untuk tutup notifikasi */}
          <button
            onClick={() => setNotification(null)}
            className="ml-4 text-lg font-bold text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      )}

      {/* Menampilkan pesan jika tidak ada negara yang sedang bekerja sama */}
      {countries.length === 0 ? (
        <p className='mt-8 text-center text-gray-500'><i>Tidak Ada Negara Yang Sedang Bekerja Sama</i></p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries.map((country) => (
            <div key={country.cca3} className="relative overflow-hidden rounded-lg shadow-md bg-slate-100">
              {/* Gambar bendera */}
              <img 
                src={country.flags?.svg}
                alt={`${country.name?.common} flag`} 
                className="object-contain w-full h-32" 
              />
              <div className="p-4">
                {/* Detail negara */}
                <h2 className="mb-2 text-lg font-bold">{country.name.common}</h2>
                <p className="mb-1 text-sm"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p className="mb-1 text-sm"><strong>Region:</strong> {country.region}</p>
                <p className="mb-2 text-sm"><strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
                {/* Lambang negara */}
                <img 
                  src={country.coatOfArms?.svg} 
                  alt={`${country.name?.common} coat of arms`} 
                  className="object-contain w-20 h-20 mx-auto my-2" 
                />
              </div>
              
              {/* Tombol remove negara dari daftar cooperation list */}
              <button
                onClick={() => handleRemove(country)}
                className="absolute flex items-center justify-center w-8 h-8 bg-red-500 rounded-full top-2 right-2 hover:bg-red-600"
                aria-label="Remove country"
              >
                {/* Ikon 'X' untuk tombol hapus */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CooperationList;