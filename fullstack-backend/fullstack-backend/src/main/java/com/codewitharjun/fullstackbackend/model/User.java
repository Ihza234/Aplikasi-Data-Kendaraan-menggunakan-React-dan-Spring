package com.codewitharjun.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long nomorregistrasi;
    private String namapemilik;


    private String nomorkendaran;

    private String merkkendaraan;

    private String warnakendaran;

    private String tahunpembuatan;

    private String bahanbakar;

    public Long getNomorregistrasi() {
        return nomorregistrasi;
    }

    public void setNomorregistrasi(Long nomorregistrasi) {
        this.nomorregistrasi = nomorregistrasi;
    }

    public String getNamapemilik() {
        return namapemilik;
    }
    public void setNamapemilik(String namapemilik) {
        this.namapemilik = namapemilik;
    }

    public void setMerkkendaraan(String merkkendaraan) { this.merkkendaraan = merkkendaraan; }

    public String getMerkkendaraan() { return merkkendaraan; }



    public String getNomorkendaran() {
        return nomorkendaran;
    }

    public void setNomorkendaran(String nomorkendaran) {
        this.nomorkendaran = nomorkendaran;
    }

    public String getWarnakendaran() {
        return warnakendaran;
    }

    public void setWarnakendaran(String warnakendaran) {
        this.warnakendaran = warnakendaran;
    }

    public String getTahunpembuatan() {
        return tahunpembuatan;
    }

    public void setTahunpembuatan(String tahunpembuatan) {
        this.tahunpembuatan = tahunpembuatan;
    }

    public String getBahanbakar() {
        return bahanbakar;
    }

    public void setBahanbakar(String bahanbakar) {
        this.bahanbakar = bahanbakar;
    }
}
