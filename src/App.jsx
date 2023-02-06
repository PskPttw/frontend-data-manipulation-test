import { useState, useEffect } from 'react'
import data from './constant/MOCK_DATA.json';
import Card from './component/Card';

function App() {
  // constants
  const GENDER = Array.from(new Set(data.map((item) => item.gender)));
  const COUNTRY = Array.from(new Set(data.map((item) => item.country)));
  
  const [filterData, setFilterData] = useState(data)
  
  const [query, setQuery] = useState("")
  const [genderFilter, setGenderFilter] = useState("")
  const [countryFilter, setCountryFilter] = useState("")
  
  useEffect(() => {
    setFilterData(data)
  }, [])

  const refreshFilter = (type) => {
    // if (g === "") {
    //   let countryFilterData = genderFilterData.filter(d => d.country === c)
    //   return countryFilterData
    // } 
    // else if (c === "") {
    //   let genderFilterData = data.filter(d => d.gender === g)
    //   return genderFilterData
    // } 
    // else if (g && c) {
    //   let genderFilterData = data.filter(d => d.gender === g)
    //   let countryFilterData = genderFilterData.filter(d => d.country === c)
    //   return countryFilterData
    // }
  }

  const clearHandler = () => {
    setQuery("")
  }

  const filterGender = (g) => {
    let filteredGender = data.filter(d => d.gender === g);
    setGenderFilter(g)
    return filteredGender;
  }

  const filterCountry = (c) => {
    let filteredCountry = data.filter(d => d.country === c);
    setCountryFilter(c)
    return filteredCountry;
  }

  const multiFilter = (c, g) => {
    let multiFilteredData = data
    if (g === "" && c === "") {
      return multiFilteredData
    } else if (g === "") {
      multiFilteredData = data.filter((d) => d.country === c)
    } else if (c === "") {
      multiFilteredData = data.filter((d) => d.gender === g)   
    } else {
      multiFilteredData = data.filter((d) => d.country === c && d.gender === g)
    }
    return multiFilteredData
  }

  const genderChangeHandler = (e) => {
    let gender = e.target.value
    gender !== ""
      ? setFilterData(filterGender(gender))
      : setFilterData(data)
  }

  const countryChangeHandler = (e) => {
    let country = e.target.value
    country !== ""
      ? setFilterData(filterCountry(country))
      : setFilterData(data)
  }


  return (
    <div className= 'flex flex-col bg-slate-600'>
      {/* Gender */}
      <div className= 'flex flex-row p-4 justify-center'>
        { GENDER.map((g, i) => (
          <button className= 'px-6 bg-white border border-slate-600 m-1' key= { i } value= { g } onClick= { genderChangeHandler }>
            { g }
          </button>
        )) } 
      </div>
      {/* Country */}
      <div className= 'flex flex-row p-4 justify-center'>
        { COUNTRY.map((c, i) => (
          <button className= 'px-6 bg-white border border-slate-600 m-1' key= { i } value= { c } onClick= { countryChangeHandler } >
            { c }
          </button>
        )) }
      </div>

      <div>
        <div> 
          <input type= 'text' placeholder= 'First name or Last name' value= { query } className= 'm-1 px-3 py-2'  onChange= { e => setQuery(e.target.value) }/>
          <button className= 'm-1 p-1 underline' onClick= { clearHandler }>Clear</button>
        </div>
      </div>

      <div className= "p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        { 
          // (!genderFilter || !countryFilter) ? filterData.filter(d => {
          //   if (query === "") {
          //     return d
          //   } else if (d.first_name.toLowerCase().includes(query.toLowerCase()) || d.last_name.toLowerCase().includes(query.toLowerCase())) {
          //     return d
          //   }
          // }).map((d, i) => (
          //   <Card data= { d } key= { i }/>
          // )) 
          filterData.map((d) => (
            <Card data= { d } key= { d.id }/>
          ))
        }
      </div>
    </div>
  )
}

export default App
