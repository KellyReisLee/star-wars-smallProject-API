import { useState } from 'react';
import Inicial from './components/Inicial/Inicial';
import BoxesData from './components/BoxesData/BoxesData';
import Character from './components/Character/Character';
import Header from './components/Header/Header'
import useFetch from './components/useFetch-copy';
import './App.css';


function App() {

  const [changePage, setChangePage] = useState('Home');
  const [character, setCharacter] = useState([]);



  const inicialDataImagesTotal = useFetch('https://akabab.github.io/starwars-api/api/all.json');

  const inicialDataImages = inicialDataImagesTotal.inicialData;
  const isLoadingData = inicialDataImagesTotal.isLoading;
  const errorData = inicialDataImagesTotal.error;


  let content;
  if (!inicialDataImages) {
    return content = <p>No data found!</p>
  }
  if (isLoadingData) {
    content = <p>Loading...</p>
  }

  if (errorData) {
    content = <p>error</p>
  }





  // Collecting all species from the API.
  let allSpecies = [];
  allSpecies.push(inicialDataImages.map((item) => item.species))

  const indices = [0, 1, 12, 14, 15, 18, 22, 25, 28, 29, 31, 34, 39, 42, 43, 46, 50, 51, 52, 56, 57, 61, 68, 70, 74, 76];


  // Arrays for species:
  let uniqueSpecies = Array.from(new Set(allSpecies.flat()));
  const selectedSpeciesData = inicialDataImages.filter(item => uniqueSpecies.includes(item.species));
  const selectSpecies = selectedSpeciesData.filter((value, index) => indices.includes(index));


  const selectSpeciesDataInfor = selectSpecies.slice(0, 10);

  const removeElement21 = inicialDataImages.filter((item, index) => index !== 21);

  console.log(removeElement21);
  let dataList = [];
  if (changePage === 'Characters') {
    dataList = [...removeElement21]
  }
  if (changePage === 'Species') {
    dataList = [...selectSpeciesDataInfor]
  }


  // Change to Character function
  function handleChangeCharacter(id) {
    let clickedEl = removeElement21.filter((item) => item.id === id)
    setCharacter(clickedEl)
    setChangePage('Character')
  }


  return (
    <>

      <div className='App'>
        {content}
        {/* Home page */}
        {changePage === 'Home' && (
          <Inicial setChangePage={setChangePage} />
        )}

        {/* Display cards about characters */}
        {changePage === 'Characters' && (
          <>
            <Header />
            <BoxesData
              changePage={changePage}
              setChangePage={setChangePage}
              dataList={dataList}
              onChangeCharacter={handleChangeCharacter}

            />
          </>
        )}
        {/* Display cards Species */}
        {changePage === 'Species' && (
          <>
            <Header />
            <BoxesData
              changePage={changePage}
              setChangePage={setChangePage}
              dataList={dataList}

            />
          </>
        )}

        {/* Information about the Character */}
        {changePage === 'Character' && (
          <>
            <Header />
            <Character
              character={character}
              changePage={changePage}
              setChangePage={setChangePage}
              dataList={dataList}

            />
          </>
        )}



      </div>
      <p className='footer'>Developed by Kelly Lee - 2024</p>
    </>

  );
}

export default App;
