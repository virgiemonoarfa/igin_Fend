function CardMahasiswa(props) {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg w-64">
      <h2 className="text-xl font-bold">{props.nama}</h2>
      <p className="text-gray-300">NIM: {props.nim}</p>
      <p className="text-gray-300">Jurusan: {props.jurusan}</p>
    </div>
  )
}

export default CardMahasiswa