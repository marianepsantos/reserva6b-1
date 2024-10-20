
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./login.module.css";
import Button from "../components/button";

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errologin, setErroLogin] = useState('');

    const login = () => {
    
        if (email === 'Ifms@gmail.com' && senha === '123') {

        } else {
            setErroLogin('Email ou senha incorretos');
        }
    };

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
