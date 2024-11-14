'use client';
import {useEffect} from 'react';
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import styles from "./page.module.css";


export default function Home(){
const router = useRouter();
useEffect(() => {
  const {'restaurant-token' : token} = parseCookies()
  if (!token){
    router.push('/Login')
  }
}, [])

return (
  <div className={styles.a}>
    <div className={styles.nav}>
      <Link href="/login">Login</Link>
      <Link href="/cadastrar">Cadastrar</Link>
    </div>
  </div>
);
}