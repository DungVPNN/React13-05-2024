import React from 'react'
let a =10;
let b=10;
export default function Bt2() {
    return (
        <div>
            <h3>Danh sách kết quả</h3>
            <p>{a}+{b}={a+b}</p>
            <p>{a}-{b}={a-b}</p>
            <p>{a}*{b}={a*b}</p>
            <p>{a}/{b}={a/b}</p>
        </div>
  )
}
