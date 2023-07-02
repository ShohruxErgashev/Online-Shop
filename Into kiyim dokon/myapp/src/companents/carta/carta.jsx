import React from 'react';

const Carta = ({narx, foto}) => {
  return (
    <div className='container'>
      <div class="card child">
      <img src={foto} height={400} width={300}class="card-img-top" alt="" />
      <div class="card-body">
      <h5 class="card-title">{narx}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
    </div>
  )
}

export default Carta