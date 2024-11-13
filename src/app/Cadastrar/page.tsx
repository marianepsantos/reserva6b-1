'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import { ApiURL } from "../config";

interface ResponseSignin {
    erro: boolean,
    mensagem: string,
   
} 


export default function Cadastrar(){
    const router = useRouter();
    const [usuario, setUsuario] = useState<string>(''); {
        wsw
    }
  
    const [ErroCadastrar, setErroCadastrar] = useState<string | null>('')




    const Cadastrar = async (e: React.FormEvent) => {
        e.preventDefault(); 
        

        if (usuario.email || usuario.password || usuario.nome) {
            setErroCadastrar('Todos os campos devem ser preenchidos!');
            return;
        }
        try {
            const response = await fetch(`${ApiURL}/auth/cadastrar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario }),
            })
        
            console.log()
        }}; //ve
       

    return (
        <div>
            <h1 className={styles.center}>Página de Cadastro</h1>
            <br />
            <form onSubmit={Cadastrar}>
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
                    <input
                        className={styles.input}
                        type="usuario"
                        placeholder="Insira o seu name"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className={styles.button} type="submit">Cadastrar</button>
                    {ErroCadastrar && <p>{ErroCadastrar}</p>}
                  
                </center>
            </form>
        </div>
    );
    }
