
'use client';
import { FormEvent, useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import Button from "../Components/button";
import Usuario from '../Interfaces/usuario';
import { ApiURL } from "../config";



interface ResponseSignin {
    erro: boolean,
    mensagem: string,
    token?: string
}


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errologin, setErroLogin] = useState("");
    const router = useRouter();

    useEffect(() => {
        const { 'restaurant-token': token } = parseCookies()
        if (token) {
            router.push('/')
        }
    }, [])


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${ApiURL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            console.log()

            if (response) {
                const data: ResponseSignin = await response.json()
                const { erro, mensagem, token = '' } = data;
                console.log(data)
                if (erro) {
                    setErroLogin(mensagem)
                } else {
                    // npm i nookies setCookie
                    setCookie(undefined, 'restaurant-token', token, {
                        maxAge: 60 * 60 * 1 // 1 hora
                    })
                    router.push('/')
                }
            } else {
                setErroLogin("")

            }
        }
        catch (error) {
            console.error('Erro na requisicao', error)
        }

    }



    return (
        <div>
            <Button
                name="Info 6B"
                numero={1}
            />
            <h1 className={styles.center}>PÁGINA PARA LOGIN</h1>
            <br />
            <form onSubmit={handleSubmit}>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
