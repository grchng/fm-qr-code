import React from "react";
import Image from "next/image";
import qrcode from "src/assets/image-qr-code.png";

/* 
The Next.js Image component extends the HTML <img> element 
for automatic image optimization. 
  https://nextjs.org/docs/pages/api-reference/components/image 
*/

const imageStyle = {
  borderRadius: "10px",
  width: "288px",
  height: "288px",
};

export function QR() {
  return (
    <Image src={qrcode} style={imageStyle} alt="QR code" priority={false} />
  );
}
