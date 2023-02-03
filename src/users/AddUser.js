import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate=useNavigate()

  const [user,setUser]=useState
  ({
    
    namapemilik:"",
    nomorkendaran:"",
    merkkendaraan:"",
    warnakendaran:"",
    tahunpembuatan:"",
    bahanbakar:""
  });

const{namapemilik,nomorkendaran,merkkendaraan,warnakendaran,tahunpembuatan,bahanbakar} = user;
const onInputChange=(e)=>{

  setUser({...user,[e.target.name]: e.target.value});

};

const onSubmit=async (e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/user",user)
  navigate("/")
};

  return (
  <div className="container">
    <div className="row">

    <div className="col-md-7 offset-md3 border rounded p-4 mt-2 shadow">
        <h2 className='text-center m-4'>Register User</h2>
        <div className='mb-3'>
        </div>
        <form onSubmit={(e)=> onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='Namapemilik' className='form-label'>
            Nama Pemilik 
          </label>
          <input
           type={"text"}
          className="form-control"
          placeholder="Masukan Nama Pemilik"
          name="namapemilik"
          value={namapemilik}
          onChange={(e)=>onInputChange(e)}
          />
          
        </div>

        <div className='mb-3'>
          <label htmlFor='Nomorkendaran' className='form-label'>
           Nomor kendaraan
          </label>
          <input type={"text"}
          className="form-control"
          placeholder="Masukan Nomor Kendaraan"
          name="nomorkendaran"
          value={nomorkendaran}
          onChange={(e)=>onInputChange(e)}
          />
          </div>

        
        

        <div className='mb-3'>
          <label htmlFor='Merkkendaraan' className='form-label'>
           Merk Kendaraan 
          </label>
          <input type={"text"}
          className="form-control"
          placeholder="Masukan Merk Kendaraan"
          name="merkkendaraan"
          value={merkkendaraan}
          onChange={(e)=>onInputChange(e)}
          />
          
        </div>

        <div className='mb-3'>
          <label htmlFor='Warnakendaraan' className='form-label'>
            Warna Kendaraan
          </label>
          <input type={"text"}
          className="form-control"
          placeholder="Masukan Warna Kendaraan"
          name="warnakendaran"
          value={warnakendaran}
          onChange={(e)=>onInputChange(e)}
          />
          
          
        </div>
        
        <div className='mb-3'>
          <label htmlFor='Tahunpembuatan' className='form-label'>
           Tahun Pembuatan 
          </label>
          <input type={"text"}
          className="form-control"
          placeholder="Masukan Tahun Pembuatan"
          name="tahunpembuatan"
          value={tahunpembuatan}
          onChange={(e)=>onInputChange(e)}
          />
          </div>

        <div className='mb-3'>
          <label htmlFor='Bahanbakar' className='form-label'>
            Bahan Bakar 
          </label>
          <input type={"text"}
          className="form-control"
          placeholder="Masukan Bahan Bakar"
          name="bahanbakar"
          value={bahanbakar}
          onChange={(e)=>onInputChange(e)}
          />
          
        </div>
        <button type="submit" className='btn btn-outline-primary'>Submit</button>
        <Link type="submit" className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
        </form>
        </div>
    </div>
    </div>
    
  );
}


