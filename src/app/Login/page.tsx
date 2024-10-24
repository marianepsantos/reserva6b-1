
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./login.module.css";
import Button from "../components/button";
import Usuario from '../Interfaces/usuario';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errologin, setErroLogin] = useState('');
    const [usuario, setUsuario] = useState<Usuario[]>([
        
            {
                id : 1,
                nome:"Mariane",
                email:"mariane.ifms@gmail.com",
                password:"123",
                tipo:"admin"
            },

            {
                id : 2,
                nome:"Mikaelly",
                email:"mikaelly.ifms@gmail.com",
                password:"123",
                tipo:"cliente"
            }
    ])
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
