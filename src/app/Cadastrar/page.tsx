'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./cadastrar.module.css";
import Button from "../Components/button";
import MyInput from '../Components/myinput';
import Usuario from '../Interfaces/usuario';

export default function Cadastrar() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [usuario, setUsuario] = useState<usuario>({
        nome:'',
        email'',
        password:'',
        tipo:'cliente'            
    });

    const [ErroCadastrar, setErroCadastrar] = useState<string | null>('')

    const cadastrar = () => {
    
        if (email === 'Ifms@gmail.com' && senha === '123' && usuario === 'Mariane') {
            router.push('/')

        } else {
            setErroCadastrar('Senha ou email errados');
        }
    };

    return (
        <div>
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
                        placeholder="Insira o seu UserName"
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
