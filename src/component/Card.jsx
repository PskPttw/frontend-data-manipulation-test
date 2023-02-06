import React from 'react'
{/* <div className= 'm-2 bg-slate-500 '>
{ data.id }
{ data.first_name }
</div> */}
const Card = ({ data }) => {
  return (
    <div className="max-w-xs m-2 rounded overflow-hidden shadow-lg bg-white flex flex-col">
      <img className="w-full h-48" src= { data.image } alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <h1 className="font-normal text-gray-500 mb-2">
          { data.first_name } { data.last_name }
        </h1>
        <h1>
          { data.gender }
        </h1>
        <h1>
          { data.email }
        </h1>
        <h1>
          { data.country }
        </h1>
      </div>
  </div>
  )
}

export default Card