import React from 'react'
interface Name {
    firstName: string
    lastName: string
  }
  export default function Bai6() {
      const formatName:Name={
        firstName: 'Dang',
        lastName: 'Dung'
      }
      return (
        <div>
          Họ và tên: {formatName.firstName} {formatName.lastName}
        </div>
      )
    }