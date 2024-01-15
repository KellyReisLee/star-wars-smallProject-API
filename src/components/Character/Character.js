import React from 'react'
import './Character.css'


const Character = ({ character, changePage, setChangePage }) => {

  console.log(character);
  return (
    <>
      {/* To Home Page */}
      {changePage === 'Character' && (<>
        <h2 className='title-page'>{changePage}</h2>
        <div className='btn-change-page-div'>
          <button onClick={() => setChangePage('Home')} id='btn-changePage'><span className='underline'>Home</span></button>
          <button onClick={() => setChangePage('Characters')} id='btn-changePage'><span className='underline'>Characters</span></button>
        </div>

        <div className='box-character'>
          <div className='left-character'>

            <img className='character-img' src={character[0].image} alt='' />

          </div>
          <div className='right-character'>
            <h1 >{character[0].name}</h1>
            <p ><strong>Homeworld:</strong> <span>{character[0].homeworld[0].toUpperCase() + character[0].homeworld.substring(1)}</span></p>

            <p><strong>Specie: </strong><span>{character[0].species[0].toUpperCase() + character[0].species.substring(1)}</span></p>

            {character[0].species === 'droid' ? (<>
              <p><strong>Creater:</strong> <span>{character[0].creator
              }</span></p>
              <p><strong>Manufacturer:</strong> <span>{character[0].manufacturer
              }</span></p>
            </>) : <>
              <p><strong>Masters:</strong> <span>{character[0].masters}</span></p>
              <p><strong>Apprentices:</strong> <span>{character[0].apprentices}</span></p>
            </>}


            <p><strong>Wiki:</strong> <span><a href={character[0].wiki} title={`${character[0].name} wiki`}>{character[0].wiki}</a></span></p>

          </div>

        </div>

      </>)}






    </>
  )
}

export default Character
