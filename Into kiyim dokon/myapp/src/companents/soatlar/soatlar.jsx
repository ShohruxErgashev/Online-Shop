import React from 'react';
import Carta from '../carta/carta';
import { Link } from 'react-router-dom';

const Soatlar = () => {
  return (
    <div className='container'>
    <h1 class="display-3">Soatlar</h1>
    <div className='mt3 parent'>
      <div className='child'>
        <Carta narx={'50$'} foto={'https://images.uzum.uz/cdvt81ivtie1lhbe99e0/original.jpg'}/>
      </div>
      <div className='child'>
        <Carta narx={'50$'} foto={'https://olcha.uz/image/400x400/products/CAHxH6M6X4sW6jaIslIPcC1eRJmxMSNo899fTl3USzyFC5jkMl3VmLJtR6Nf.jpg'}/>
      </div>
      <div className='child'>
        <Carta narx={'50$'} foto={'https://assets.asaxiy.uz/product/items/desktop/934815ad542a4a7c5e8a2dfa04fea9f52021062914010057802dV5r6xRs06.jpg.webp'}/>
      </div>
      <div className='child'>
        <Carta narx={'50$'} foto={'https://frankfurt.apollo.olxcdn.com/v1/files/x9ehl7r1uyy22-UZ/image'}/>
      </div>
      <div className='child'>
        <Carta narx={'50$'} foto={'https://storage.kun.uz/source/uploads/2017-0910/qmst7.jpg'}/>
      </div>
      <div className='child'>
        <Carta narx={'50$'} foto={'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/81/27364681/167846296539111100430.jpeg'}/>
      </div>
    </div>

    <div className="bot">
    <div>
    <h1 class="h3 mb-3 fw-normal">Buyurtma bering biz siz bilan bog'lanamiz!</h1>
    </div>
    <i class='bx bxl-shopify'></i>
    <div>
    <Link to={'buyurtma'}>
      <button type="button" class="btn btn-outline-primary">Buyurma berish</button>
    </Link>
    </div>
  </div>

    </div>
  )
}

export default Soatlar