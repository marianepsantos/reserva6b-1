'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "./cadastrar.module.css";
import Button from "../components/button";

export default function Cadastrar() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('');
    

    const cadastrar = () => {
    
        if (email === 'Ifms@gmail.com' && senha === '123' && usuario === 'Mariane') {

        } else {
            setUsuario('Usuário Cadastrado');
        }
    };

    return (
        <div>
            <Button 
                name="Info 6B"
                numero={1}
            />
            <h1 className={styles.center}>Página de Cadastro</h1>
            <br />
            <form onSubmit={cadastrar}>
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
                    <input
                        className={styles.input}
                        type="usuario"
                        placeholder="Usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className={styles.button} type="submit">Cadastrar</button>
                  
                </center>
            </form>
        </div>
    );
}
