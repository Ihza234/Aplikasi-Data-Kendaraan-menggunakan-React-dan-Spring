import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [user,setUser]=useState({
        
        namapemilik:"",
        nomorkendaran:"",
        merkkendaraan:"",
        warnakendaran:"",
        tahunpembuatan:"",
        bahanbakar:""

    })
     const {nomorregistrasi}=useParams();
     useEffect(()=>{
        loadUser();

     },[]);
     const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${nomorregistrasi}`);
        setUser(result.data)
     }
    return(
        <div className="container">
        <div className="row">
    
        <div className="col-md-7 offset-md3 border rounded p-4 mt-2 shadow">
            <h2 className='text-center m-4'>User Details</h2>

            <div className="card">
                <div className="card-header">
                    Details of user id : {user.nomorregistrasi}
                    <ul className="list-group list-group-flush">
                        

                        <li className="list-group-item">
                            <b>Nama Pemilik</b>
                            {user.namapemilik}
                        </li>

                        <li className="list-group-item">
                            <b>Nomor Kendaraan</b>
                            {user.nomorkendaran}
                        </li>

                        <li className="list-group-item">
                            <b>Merk Kendaraan</b>
                            {user.merkkendaraan}
                        </li>

                        <li className="list-group-item">
                            <b>Warna Kendaraan</b>
                            {user.warnakendaran}
                        </li>

                        <li className="list-group-item">
                            <b>Tahun Pembuatan</b>
                            {user.tahunpembuatan}
                        </li>

                        <li className="list-group-item">
                            <b>Bahan Bakar</b>
                            {user.bahanbakar}
                        </li>
                    </ul>

                </div>

            </div>
            <Link className="btn btn-primary my-2" to={"/"}>Back To HomePage</Link>

            </div>
            </div> 
            </div>
    );
}