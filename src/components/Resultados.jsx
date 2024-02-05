
export const Resultados = ({pelicula}) => {
  return (
    <div>
        <img
              src={`https://image.tmdb.org/t/p/w400${pelicula.poster_path}`}
              alt={pelicula.title}
              className="rounded-t-lg"
            />
            <div className="p-5">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pelicula.title}</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{pelicula.overview}</p>
            </div>
    </div>
  )
}
