type ButtonProp ={
    name: string;
    numero:number;
    teste:() => void
}

const Button: React.FC<ButtonProp> = ({name,numero}) => {
    return <div><h1>{name} oi {numero}</h1></div>
}

export default Button