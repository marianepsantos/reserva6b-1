
'use client';
import { FormEvent, useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import styles from "./login.module.css";
import Button from "../Components/button";
import Usuario from '../Interfaces/usuario';
import { ApiURL } from "../config";



interface ResponseSignin {
  erro: boolean,
  mensagem: string,
  token?: string
}


export default function Login() {

    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [errologin, setErroLogin] = useState<string>();
    const router = useRouter();
   
    useEffect(() => {
        const {'ewstaurant-token': token} = parseCookies()
            if (token){
                router.push('/')
            }
    }, [])


    const  handleSubmit = async (e : FormEvent) => {
        e.preventDefault();
        try {
         const response = await fetch(`${ApiURL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({email, senha})
         })
          if (response){
            const data : ResponseSignin = await response.json()
            const {erro, mensagem, token = ''} = data;
            console.log(data)
            if (erro){
              setErroLogin(mensagem)
            } else {
              // npm i nookies setCookie
              setCookie(undefined, 'restaurant-token', token, {
                maxAge: 60*60*1 // 1 hora
              } )
              router.push('/')
            }
          } else {
            setErroLogin("")
  
          }
      } 
       catch (error) {
      console.error('Erro na requisicao', error)
    }
/*
    const router = useRouter();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>{
        e.preventDefault()
        const usuario =usuario.find(user) => user.email == email && user password == senha
    )
    if(usuario){
        logalStorage.setItem('usuario', JSON.stringify(usuario))
        router.push('/home')
    } else{
        setError('Email ou senha inválido')
    }
    }
*/


    const login = () => {
    
        if (email === 'Ifms@gmail.com' && senha === '123') {

        } else {
            setErroLogin('Email ou senha incorretos');
        }
    };
/*
    useEffect(() => {
        fetch('/data.usuario.json')
        .then((dados) => dados.json())
        .then((dado) => console.log(dado))
        .catch((error) => console.log(error))
    }, [])
*/
    return (
        <div>
            <Button 
                name="Info 6B"
                numero={1}
            />
            <h1 className={styles.center}>PÁGINA PARA LOGIN</h1>
            <br />
            <form onSubmit={login}>
                <center>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className={styles.button} type="submit">Login</button>
                    {errologin && <p className={styles.p}>{errologin}</p>}
                </center>
            </form>
        </div>
    );
    }
