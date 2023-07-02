import { Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/system';

// import {Main};
import { Main,  Navbar, Kozoynaklar, Soatlar, Taqinchoqlar, Shimlar, Kozoynakbuyurtma, Soatbuyurtma, Taqinchoqbuyurtma, Ustki, Ustkibuyurtma, Shimbuyurtma, Oyoqkiyimlar, Oyoqkiyimbuyurtma } from '../';

const App = () => {
  return (
      <Stack>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/kozoynaklar' element={<Kozoynaklar />} />
          <Route path='/soatlar' element={<Soatlar />} />
          <Route path='/shimlar' element={<Shimlar />} />
          {/* <Route path='/oyoqkiyimlar' element={<Oyoqkiyimlar />} /> */}
          <Route path='/soatlar' element={<Soatlar />} />
          <Route path='/taqinchoqlar' element={<Taqinchoqlar />} />
          <Route path='/kozoynaklar/buyurtma' element={<Kozoynakbuyurtma />} />
          <Route path='/soatlar/buyurtma' element={<Soatbuyurtma />} />
          <Route path='/taqinchoqlar/buyurtma' element={<Taqinchoqbuyurtma />} />
          <Route path='/ustki' element={<Ustki />} />
          <Route path='/ustki/buyurtma' element={<Ustkibuyurtma />} />
          <Route path='/shimlar' element={<Shimlar />} />
          <Route path='/shimlar/buyurtma' element={<Shimbuyurtma />} />
          <Route path='/oyoqkiyimlar' element={<Oyoqkiyimlar />} />
          <Route path='/Oyoqkiyimlar/buyurtma' element={<Oyoqkiyimbuyurtma />} />
        </Routes>
      </Stack>
 )
}

export default App