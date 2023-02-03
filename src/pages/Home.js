import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [users,setUsers]=useState([]);

    const {nomorregistrasi}=useParams()

    useEffect(() => {
        loadUsers();
},[]);
const loadUsers = async () => {
    const result=await axios.get("http://localhost:8080/users");
    setUsers(result.data);
};

const deleteUser=async (nomorregistrasi)=>{
  await axios.delete(`http://localhost:8080/user/${nomorregistrasi}`)
  loadUsers()
}

  return (
    <div className="container">
        <div className="py-8">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">No.Registrasi</th>
      <th scope="col">Nama Pemilik</th>
      <th scope="col">Nomor Kenadaraan</th>
      <th scope="col">Merk Kendaraan</th>
      <th scope="col">Warna Kendaraan</th>
      <th scope="col">Tahun pembuatan</th>
      <th scope="col">Bahan Bakar</th>
      <th scope="col">Aksi</th>
      
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.nomorregistrasi}</td>
      <td>{user.namapemilik}</td>
      
      <td>{user.nomorkendaran}</td>
      <td>{user.merkkendaraan}</td>
      <td>{user.warnakendaran}</td>
      <td>{user.tahunpembuatan}</td>
      <td>{user.bahanbakar}</td>
      <td>
        <Link className="btn btn-primary mx-1"
        to={`/viewuser/${user.nomorregistrasi}`}>View</Link>
        <Link className="btn btn-outline-primary mx-1"
        to={`/edituser/${user.nomorregistrasi}`}
        >Edit</Link>
        <button className="btn btn-danger mx-1"
        onClick={()=>deleteUser(user.nomorregistrasi)}>Delete</button>
      </td>
    </tr>

        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
}
