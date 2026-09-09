import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CardMahasiswa from './CardMahasiswa'

export default function App() {
  const dataMahasiswa = [
    { id: 1, nama: "Igin", nim: "2301045", jurusan: "Informatika" },
    { id: 2, nama: "Luna", nim: "2308912", jurusan: "Sistem Informasi" },
    { id: 3, nama: "Kevin", nim: "2305541", jurusan: "Teknik Komputer" },
  ]

  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 pb-10 flex flex-col">
      <Navbar />
      <Hero />

      <div className="flex flex-wrap items-center justify-center -mt-16 px-8 pb-8 gap-6 flex-grow">
        {dataMahasiswa.map((mhs) => (
          <div
            key={mhs.id}
            onClick={() => setSelectedId(mhs.id)}
            className={`cursor-pointer transition-transform hover:scale-105 rounded-lg ${
              selectedId === mhs.id ? "ring-4 ring-yellow-400" : ""
            }`}
          >
            <CardMahasiswa
              nama={mhs.nama}
              nim={mhs.nim}
              jurusan={mhs.jurusan}
            />
          </div>
        ))}
      </div>
    </div>
  )
}