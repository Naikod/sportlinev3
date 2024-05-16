import React from 'react'
import QRCode from 'qrcode.react';

export default function 
() {
  return (
    <div>
        <QRCode value="http://192.168.1.34:5000/accounts" className="mb-4" />
    </div>
  )
}
