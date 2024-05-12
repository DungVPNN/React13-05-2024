import React from 'react'
interface User{
name:string;
gender:string;
date:string;
email:string;
address:string;
}

export default function Bai2() {

const User1:User={
    name: 'Dung',
    gender:'Nam',  
    date:'09/03/2005',
    email:'abc@gmail.com',
    address:'Hà Nội',
}
    return (
    <div>
    <h3>Hiển thị thông tin người dùng</h3>
    <p>Name: {User1.name}</p>
    <p>Gender: {User1.gender}</p>
    <p>Date: {User1.date}</p>
    <p>Email: {User1.email}</p>
    <p>Address: {User1.address}</p>
    </div>
    )
}