import React, {useState} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const DestinationSearch = ({destinationsList}) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const handleSearchChange = e => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="destination-search">
      <h1 className="heading">Destination Search</h1>
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
        className="input-text"
      />

      <ul className="ul">
        {filteredDestinations.map(destination => (
          <DestinationItem key={destination.id} destination={destination} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
