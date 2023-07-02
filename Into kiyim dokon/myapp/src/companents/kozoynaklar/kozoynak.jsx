import React from 'react';
import Carta from '../carta/carta';
import { Link } from 'react-router-dom';

const Kozoynaklar = () => {
  return (
    <div class="container">

<h1 class="display-3">Ko'zoynaklar</h1>

<div className="mt-3 parent">

  <div className="child">
    <Carta narx={'20$'} foto={'https://www.optika.uz/uploads/product/4c8ed2367d049f6690aae0fc499707a4.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'30$'} foto={'https://www.optika.uz/uploads/product/7c8ceab77767dec75be4f6f57745043e.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'40$'} foto={'https://cdn.globalso.com/dlsunglasses/c110.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'50$'} foto={'https://www.optika.uz/uploads/product/b0869a053e79014f62d37fa06cbd8ab1.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'60$'} foto={'https://srcyrl.conchen-sunglasses.com/uploads/202227415/polygon-oversized-fashion-designer-sunglasses20258430747.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'70$'} foto={'https://storage.kun.uz/source/uploads/2017-0708/kznyr1.jpg'} />
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

export default Kozoynaklar