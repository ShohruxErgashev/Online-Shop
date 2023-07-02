import React from 'react';
import Carta from '../carta/carta';
import { Link } from 'react-router-dom';

const Ustki = () => {
  return (
    <div class="container">

<h1 class="display-3">Ustki kiyimlar</h1>

<div className="mt-3 parent">

  <div className="child">
    <Carta narx={'20$'} foto={'https://frankfurt.apollo.olxcdn.com/v1/files/5w2qqrmerc473-UZ/image'} />
  </div>
  <div className='child'>
    <Carta narx={'30$'} foto={'https://frankfurt.apollo.olxcdn.com/v1/files/z36dpqhoyf0k1-UZ/image;s=1072x1280'} />
  </div>
  <div className='child'>
    <Carta narx={'40$'} foto={'https://shoptextile.uz/image/cache/catalog/image/cache/catalog/product/ST1367/ST1367_1-1000x1000.webp'} />
  </div>
  <div className='child'>
    <Carta narx={'50$'} foto={'https://images.uzum.uz/cf8fdpov1htd23alfpk0/original.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'60$'} foto={'https://storage.kun.uz/source/uploads/2016iyulavgust/kfkshoes6.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'70$'} foto={'https://pmall.uz/images/thumbnails/1280/1280/detailed/9/photo_2020-11-26_10-30-08.jpg'} />
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