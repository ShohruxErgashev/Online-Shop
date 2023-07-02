import React from 'react';
import Carta from '../carta/carta';
import { Link } from 'react-router-dom';

const Ustki = () => {
  return (
    <div class="container">

<h1 class="display-3">Ustki kiyimlar</h1>

<div className="mt-3 parent">

  <div className="child">
    <Carta narx={'20$'} foto={'https://frankfurt.apollo.olxcdn.com/v1/files/s2lrlhwlkiyq2-UZ/image;s=774x1032'} />
  </div>
  <div className='child'>
    <Carta narx={'30$'} foto={'https://frankfurt.apollo.olxcdn.com/v1/files/9yx1jcbhzacr1-UZ/image;s=774x1032'} />
  </div>
  <div className='child'>
    <Carta narx={'40$'} foto={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT859UANKnc7GX2k7_dvwwW_WEt-bbnxMN6Zw&usqp=CAU'} />
  </div>
  <div className='child'>
    <Carta narx={'50$'} foto={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dufCed0KUAiLrmAosFhS1D_byCSmE0laJg&usqp=CAU'} />
  </div>
  <div className='child'>
    <Carta narx={'60$'} foto={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9E9xGnZbjPhc7Y3Ny2xpZAozMx2fVoAW0A&usqp=CAU'} />
  </div>
  <div className='child'>
    <Carta narx={'70$'} foto={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AazeTkRGN2QKjB9RBs9KgSduHjLI7awjWwPNAPPbP7OQgvgtl3c1w2pq1y3UkN716-4&usqp=CAU'} />
  </div>

</div>

  <div className="bot">
    <div>
    <h1 class="h3 mb-3 fw-normal">Buyurtma bering biz siz bilan bog'lanamiz!</h1>
    </div>
    <i class='bx bxl-shopify'></i>
    <div>
    <Link to={'buyurtma'}>
      <button type="button" class="btn center btn-outline-primary">Buyurma berish</button>
    </Link>
    </div>
  </div>

    </div>
  )
}

export default Ustki