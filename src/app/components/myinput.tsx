type MyInputProp = {
    valor:string;
    funcao: () => void
}

const MyInput: React.FC<MyInputProp> = ({valor,funcao}) => { 
    return <input value={valor} onChange={funcao}></input>
}

export default MyInput