type ButtonProp ={
    name: string;
    numero:number;
}

const Button: React.FC<ButtonProp> = ({name,numero}) => {
    return <div><h1> Nome: {name} & Numero: {numero}</h1></div>
}

export default Button;