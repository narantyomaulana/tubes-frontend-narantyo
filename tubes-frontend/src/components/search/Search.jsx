import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


const Search = () => {
  const [pahlawan, setPahlawan] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = event => {
    setSelectedOption(event.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://indonesia-public-static-api.vercel.app/api/heroes');
      const json = await response.json();
      setPahlawan(json);
    }
    fetchData();
  }, []);
return (
  <div>
    <br />
    <div className="container">
      <h2>
        Indonesia's Heroes History
      </h2>

      <select onChange={handleChange} className='btn btn-secondary dropdown-toggle w-100'  id="heroes" name="heroes">
        <option selected disabled value="">Search Now ...</option>
        {pahlawan?.map((pahlawan, index) => (
          <option value={index}>{pahlawan.name}</option>
        )) }
      </select>

      <br /><br /><br />
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <td>
                No
              </td>
              <td>
                Name
              </td>
              <td>
                Birth Year
              </td>
              <td>
                Death Year
              </td>
              <td>
                Ascension Year
              </td>
              <td>
                Description
              </td>
            </tr>
          </thead>
          <tbody>
            {!selectedOption && pahlawan?.map((pahlawan, index) => (
            <tr key={ index }>
              <td>{index + 1}</td>
              <td>{ pahlawan.name }</td>
              <td>{ pahlawan.birth_year }</td>
              <td>{ pahlawan.death_year }</td>
              <td>{ pahlawan.ascension_year }</td>
              <td>{ pahlawan.description }</td>
              <td className="text-center"></td>
            </tr>
            )) }
            {selectedOption && pahlawan?.map((pahlawan, index) => {
              if (selectedOption == index) {
                return (
                  <tr key={ index }>
                    <td>{index + 1}</td>
                    <td>{ pahlawan.name }</td>
                    <td>{ pahlawan.birth_year }</td>
                    <td>{ pahlawan.death_year }</td>
                    <td>{ pahlawan.ascension_year }</td>
                    <td>{ pahlawan.description }</td>
                    <td className="text-center"></td>
                </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="mt-3 text-primary" id="loadingBar">
        <div className="spinner-border spinner-border-sm" /> loading
      </div> */}
    </div>
    <br />
    <div className="container-fluid py-2 border-top">
      <div className="container text-secondary">
        <small>
          Copyright by Narantyo Maulana
        </small>
      </div>
    </div>
  </div>
)
}

export default Search
