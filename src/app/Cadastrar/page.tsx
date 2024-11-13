'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import { ApiURL } from "../config";
import Usuario from '../Interfaces/usuario';




export default function Cadastrar(){
    const router = useRouter();
    const [usuario, setUsuario] = useState<Usuario> ({
        nome:'',
        email:'',
        password: '',
        tipo: 'cliente'
    });
    const [ErroCadastrar, setErroCadastro] = useState('')

    interface ResponseCadastrar{
        erro: boolean;
        mensagem: string;
        token?: string
       
    } 


    const alterarNome = (novoNome: string) => {
        setUsuario((usuarioAnterior) => ({
            ...usuarioAnterior,
            nome: novoNome,
        }));
    };

    const alterarEmail = (novoEmail: string) => {
        setUsuario((usuarioAnterior) => ({
            ...usuarioAnterior,
            email: novoEmail,
        }));
    };

    const alterarPassword = (novoPassword: string) => {
        setUsuario((usuarioAnterior) => ({
            ...usuarioAnterior,
            password: novoPassword,
        }));

    };


    const cadastrar = async (e: React.FormEvent) => {
        e.preventDefault(); 
        try {
            const response = await fetch(`${ApiURL}/auth/cadastro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: usuario.nome,
                    email: usuario.email,
                    password: usuario.password,
                    tipo: usuario.tipo
                }),
            });
            
       if (!response.ok){
        throw new Error ('falha na requisição, verifique');
       }

       const data: ResponseCadastrar = await response.json();
       const { erro, mensagem} = data;
       if (erro) {
        setErroCadastro(mensagem);
      } else {
        router.push('/Login'); //L ou l minusculo
      }
        } catch (error){
            console.error('erro:', error);
            setErroCadastro('Ocorreu um erro.');
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
                        type="text"
                        id ="nome"
                        placeholder="Digite seu nome"
                        value={usuario.nome}
                        onChange={(e) => alterarNome(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        className={styles.input}
                        type="text"
                        id="email"
                        placeholder="Digite seu email"
                        value={usuario.email}
                        onChange={(e) => alterarEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        className={styles.input}
                        type="text"
                        id="password"
                        placeholder="Digite sua senha"
                        value={usuario.password}
                        onChange={(e) => alterarPassword(e.target.value)}
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
