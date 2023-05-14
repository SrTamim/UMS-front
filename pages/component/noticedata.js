
import Image from 'next/image'

export default function NoticeLayout({data})   
{
    return(
        <>
      
      <h2>Subject: {data.Nsub}</h2>
      <h2>Notice: {data.Ndetails}</h2>
        </>
    )
}