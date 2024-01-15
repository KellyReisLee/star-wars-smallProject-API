import React from 'react'
import Tooltips from '../Tooltips/Tooltips'
import './BoxesData.css'

const BoxesData = ({ setChangePage, changePage, dataList, onChangeCharacter }) => {

  return (
    <>

      <h2 className='title-page'>{changePage}</h2>

      <div className='btn-change-page-div'>
        <button key={crypto.randomUUID()} onClick={() => setChangePage('Home')} id='btn-changePage'><span className='underline'>Home</span></button>
      </div>

      <ul className='container-box'>
        {dataList.map((item, index) => {
          return (
            <div className='main-conteiner-box'>
              <button onClick={changePage === 'Characters' ? () => onChangeCharacter(item.id, index) : () => setChangePage('Home')} className='card'>
                {changePage === 'Characters' && <Tooltips />}
                <li className='li-card' key={item.id}  >
                  <div className='image-div' >
                    <img className='img' src={item.image} alt={item.name} />
                  </div>
                  <div className='text-card'>
                    {changePage === 'Characters' && (<h2>{item.name.toUpperCase()}</h2>)}
                    {changePage === 'Species' && (<h2>{item.species.toUpperCase()}</h2>)}
                  </div>
                </ li >
              </button>
            </div>

          )
        })}

      </ul >


    </>
  )
}

export default BoxesData