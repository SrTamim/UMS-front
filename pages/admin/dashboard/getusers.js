import Link from "next/link"
import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'
import Footer from "../../../pages/component/footer";
import SideBar from "../../../pages/component/sidebar"; 


export default function GetUsers({ data }) {
  const router = useRouter();
  return (
      <>
      <SessionCheck />
       <MyLayout title="Get Users"/>
      <h1>All Users</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/admin/dashboard/users/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
    <Footer />
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/findadmin/');
      const data = await response.data;
    
  return { props: { data } }
  }