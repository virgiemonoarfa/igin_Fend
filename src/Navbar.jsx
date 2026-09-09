import { useState } from 'react'

function Navbar() {
  const [judul, setJudul] = useState(false)
  const [navItems, setNavItems] = useState([
    { id: 1, id_text: "Home", en_text: "Halaman Utama", active: false },
    { id: 2, id_text: "Tentang", en_text: "About", active: false },
    { id: 3, id_text: "Kontak", en_text: "Contact", active: false },
  ])

  const toggleNavItem = (id) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    )
  }

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => setJudul((prev) => !prev)}
      >
        {judul ? "Student Information" : "Daftar Mahasiswa"}
      </h1>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => toggleNavItem(item.id)}
          >
            {item.active ? item.en_text : item.id_text}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar