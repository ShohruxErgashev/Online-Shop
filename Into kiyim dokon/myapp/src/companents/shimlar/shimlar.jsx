import React from 'react';
import Carta from '../carta/carta';
import { Link } from 'react-router-dom';

const Shimlar = () => {
  return (
    <div class="container">

<h1 class="display-3">Shimlar</h1>

<div className="mt-3 parent">

  <div className="child">
    <Carta narx={'20$'} foto={'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/cloudinary/93/5eb/https%253A%252F%252Fterrapro.uz%252Fupload%252Fiblock%252F1e0%252FIMG_6195%252520%25C2%25A6--2.jpg'} />
  </div>
  <div className='child'>
    <Carta narx={'30$'} foto={'https://trendyol.uz/wp-content/uploads/2022/01/erkaklari-shim-kengligi.webp'} />
  </div>
  <div className='child'>
    <Carta narx={'40$'} foto={'https://files.glotr.uz/company/000/019/541/products/2020/11/25/2020-11-25-18-53-02-454532-f3d668856966666b6e900ebfc91d88d6.jpg?_=ozbol'} />
  </div>
  <div className='child'>
    <Carta narx={'50$'} foto={'https://telegra.ph/file/3a8ed44717419ecabec09.png'} />
  </div>
  <div className='child'>
    <Carta narx={'60$'} foto={'https://telegra.ph/file/a52e9575ad4ada59f363d.png'} />
  </div>
  <div className='child'>
    <Carta narx={'70$'} foto={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzSaBMp2BUHr_xvJnlEtbsbd-UkJW9tpXZA&usqp=CAU'} />
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

export default Shimlar