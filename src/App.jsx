import { useEffect, useState } from "react"
import "./App.css"
import data from "/assets/data/data.json"
import { JobListing } from "./JobListing.jsx"

function App() {
  const [listings, setListings] = useState([...data])
  const [filters, setFilters] = useState([])

  function addFilter(filter) {
    if (filters.indexOf(filter) == -1) {
      setFilters((curFilters) => {
        return [...curFilters, filter]
      })
    }
  }

  function removeFilter(filter) {
    setFilters((curFilters) => {
      return curFilters.filter((elem) => elem !== filter)
    })
  }

  function clearFilters() {
    setFilters([])
  }

  useEffect(() => {
    let newListings = data.filter(({ role, level, languages, tools }) => {
      let skills = new Set([role, level, ...languages, ...tools])
      return filters.some((filter) => skills.has(filter))
    })
    if (newListings.length === 0) {
      newListings = data
    }
    setListings(newListings)
  }, [filters])

  return (
    <>
      <header className="header"></header>
      {filters.length > 0 && (
        <section className="filter__container">
          <ul className="filter__list list">
            {filters.map((filter) => {
              return (
                <li className="list__item list__item--filter" key={filter}>
                  {filter}
                  <button
                    className="list__item__remove-btn btn"
                    onClick={(event) => {
                      removeFilter(filter)
                    }}
                  ></button>
                </li>
              )
            })}
          </ul>
          <button
            className="filter__clear-btn btn"
            onClick={() => {
              clearFilters()
            }}
          >
            Clear
          </button>
        </section>
      )}
      <section className="listings">
        {listings.map((listing) => {
          return (
            <JobListing key={listing.id} {...listing} addFilter={addFilter} />
          )
        })}
      </section>
    </>
  )
}

export default App
