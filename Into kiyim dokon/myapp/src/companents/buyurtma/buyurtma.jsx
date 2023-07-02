import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buyurtma = ({tur, options, options2, options3, options4, options5, options6,}) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handelChange = (e) => {
    const {name, value} = e.target;
    setContact(prev => {return{...prev, [name]: value};
    });
  };

  const submitHandler = () => {
    const {name, optionn, number} = contact;
    const newContact = {name, optionn, number};
    axios.post('http://localhost:5000/buyurtma', newContact);
    toast.success("Buyurtmangiz qabul qilindi");
    setContact({
      name: '',
      optionn: '',
      number: '',
    });
  };

  return (
    <div>
        <ToastContainer />
        <main class="form-signin container m-auto mt-5" >
          <form>
              <div class="form-floating">
              <p class="fs-5">Ismingiz</p>
              <input name='name' onChange={handelChange} value={contact.name} type="text" class="form-control" />
              <br />
              <p class="fs-5">{tur}</p>
              <select name='optionn' onChange={handelChange} class="form-select" aria-label="Default select example">
                <option value={options}>{options}</option>
                <option value={options2}>{options2}</option>
                <option value={options3}>{options3}</option>
                <option value={options4}>{options4}</option>
                <option value={options5}>{options5}</option>
                <option value={options6}>{options6}</option>
              </select>
              </div>
              <br />
              <p class="fs-5">Telefon raqamingiz</p>
              <div class="input-group mb-3">
              <span class="input-group-text">+998</span>
              <input name='number' onChange={handelChange} value={contact.number} type="number" class="form-control" />
              </div>
              <br />
              
              <button onClick={submitHandler} class="w-100 btn btn-lg btn-primary" type="submit">Buyurtma</button>
          </form>
        </main>
    </div>
  )
}

export default Buyurtma