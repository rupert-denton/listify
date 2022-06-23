const defaultEndpoint = 'https://pokeapi.co/api/v2/pokemon'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
export default function PokemonList({data}) {
  
  const { results = [] } = data
  {results.map((result) => {
    const { name } = result
    return (
      <li key={name} className={styles.card}>
        <a href="#">
          <h2>Pokemon</h2>
          <p>{name}</p>
        </a>
      </li>
    )
  })}
}
