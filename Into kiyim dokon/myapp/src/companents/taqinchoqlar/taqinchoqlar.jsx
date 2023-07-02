import React from 'react';
import Carta from '../carta/carta';
import { Link  } from 'react-router-dom';

const Taqinchoqlar = () => {
  return (
    <div className='container'>
<h1 class="display-3">Taqinchoqlar</h1>
<div className="mt-3 parent">
  <div className="child">
  <Carta narx={'20$'} foto={'https://www.dibaexpress.com/image/cache/catalog/products/ty518/product/media/images/20220825/15/165516576/552273543/1/1_org_zoom-550x825.jpg'} />
  </div>
  <div className="child">
  <Carta narx={'30$'} foto={'https://www.dibaexpress.com/image/cache/catalog/products/ty516/product/media/images/20220825/15/165515185/552270678/1/1_org_zoom-550x825.jpg'} />
  </div>
  <div className="child">
  <Carta narx={'40$'} foto={'https://zoodmall.com/cdn-cgi/image/w=600,fit=contain,f=auto/https://images.zoodmall.com/cloudinary/6f/2c9/http%253A%252F%252Fimages.hyidsf.com%252Fimages%252F21%252F01%252Fv%252F51006935%252F10.jpg'} />
  </div>
  <div className="child">
  <Carta narx={'50$'} foto={'https://zoodmall.com/cdn-cgi/image/w=600,fit=contain,f=auto/https://images.zoodmall.com/cloudinary/ee/fa9/http%253A%252F%252Fimages.hyidsf.com%252Fimages%252F21%252F01%252Fv%252F51006935%252F3.jpg'} />
  </div>
  <div className="child">
  <Carta narx={'60$'} foto={'https://cdn.shopify.com/s/files/1/0003/8381/1646/products/il_fullxfull.2876666946_ezmp_7999f849-772a-41d3-a5a7-6f967724da17_480x480@2x.jpg?v=1675473750https://storage.kun.uz/source/uploads/2017-0910/qmst7.jpg'} />
  </div>
  <div className="child">
  <Carta narx={'70$'} foto={'https://zoodmall.com/cdn-cgi/image/w=600,fit=contain,f=auto/https://images.zoodmall.com/cloudinary/38/444/https%253A%252F%252Fimage-tb.vova.com%252Fimage%252F750_750%252Ffiller%252Fdb%252F5f%252F68b8c3b94ff1d1060df6d0ed5953db5f.jpg'} />
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

export default Taqinchoqlar