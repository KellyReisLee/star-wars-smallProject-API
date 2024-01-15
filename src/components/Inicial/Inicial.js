import React from 'react'
import './Inicial.css'
import sides from '../../assets/walk.jpg'


const Inicial = ({ setChangePage }) => {

  return (
    <div className='box-container'>
      <div className='box'>
        <div className='left'>


          <button className='btn-inicial btn-1' onClick={() =>
            (setChangePage('Characters'))}><span>Character</span><i></i></button>


          <button onClick={() => setChangePage('Species')} className='btn-inicial btn-2'><span>Species</span><i></i></button>

        </div>
        <div className='right'>
          <img className='inicial-img' src={sides} alt='' />
        </div>

      </div>
    </div >
  )
}

export default Inicial