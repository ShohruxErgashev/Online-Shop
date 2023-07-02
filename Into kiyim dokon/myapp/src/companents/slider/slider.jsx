import { Button, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div>

<h1 class="display-3">INTO erkaklar kiyim do'koni</h1>
        <p>Har kuni <del>CHEGIRMALAR</del> %</p> 

    <div class="row">
      <div class="col-lg-4">
        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title></svg> */}
        <img src="https://storage.kun.uz/source/uploads/2017-0708/kznyr2.jpg" width={390} height={180} alt="" />
        <h2 class="fw-normal">Ko'zoynaklar</h2>
        <p>Barcha turdagi ko'zoynaklarni pastdagi tugmani bosish orqali ko'rishingiz mumkin</p>
        <Link to={'kozoynaklar'}>
        <p><a class="btn btn-secondary" href="#">Barchasi</a></p>
        </Link>
      </div>
      <div class="col-lg-4">
        <img src="data:image/jpeg;base64,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" width={390} height={180} alt="" />
        <h2 class="fw-normal">Soatlar</h2>
        <p>Barcha turdagi soatlarni pastdagi tugmani bosish orqali ko'rishingiz mumkin</p>
        <Link to={'soatlar'}>
        <p><a class="btn btn-secondary" href="#">Barchasi</a></p>
        </Link>
      </div>
      <div class="col-lg-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYni49Kyr06KhUDKQRRlHImW5XI2Q2Jj7-wQ&usqp=CAU" width={390} height={180} alt="" />
        <h2 class="fw-normal">Taqinchoqlar</h2>
        <p>Barcha turdagi taqinchoqlarni pastdagi tugmani bosish orqali ko'rishingiz mumkin</p>
        <Link to={'taqinchoqlar'}>
        <p><a class="btn btn-secondary" href="#">Barchasi</a></p>
        </Link>
      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">Ustki kiyimlar</h2>
        <p class="lead">Siz eng yaxshisiga munosibsiz</p>
        <Link to={'ustki'}>
        <p><a class="btn btn-secondary" href="#">Barchasi</a></p>
        </Link>
      </div>
      <div class="col-md-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp7fkSHRUHH3YFrVul5WHkzA1iUqnOy3MIQ&usqp=CAU" alt="" />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">Shimlar</h2>
        <p class="lead">O'ziga yaxshisini ravo ko'rmagan inson boshqalarga ham ravo ko'rmaydi</p>
        <Link to={'shimlar'}>
          <p><a class="btn btn-secondary" href="#">Barchasi</a></p>
        </Link>
      </div>
      <div class="col-md-5 order-md-1">
        <img src="https://allso.uz/foto_product/42931/1_300x300.jpg" alt="" />
      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">Oyoq kiyimlar</h2>
        <p class="lead">Barcha turdagi oyoq kiyimlar</p>
        <Link to={'oyoqkiyimlar'}>
        <p><a class="btn btn-secondary" href="#">Barchasi</a></p>
        </Link>
      </div>
      <div class="col-md-5">
        <img src="https://media.self.com/photos/63a48870d50ce65b23271f7d/4:3/w_4000,h_3000,c_limit/best-shoes-for-plantar-fasciitis.png" alt="" width={250} height={250} />
      </div>
    </div>

    <hr class="featurette-divider" />
      
  </div>
  )
}

export default Slider