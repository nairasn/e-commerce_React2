// export default function Button({ text }){
//     return <button> {text} </button>
// modo 1}


// MODO 2
// export default function Button({ children, onClick }) {
//     return <button onClick={onClick}> {children} </button>
// }


// MODO 3
interface ButtonProps {
    type: string;
    className?: string;
    text: string;
    onClick: () => void;

}


// MODO TS 
// export default function Button(props: ButtonProps) {
//     return <button> {props.text} </button>
// }

export default function Button({ type, text, onClick, ...rest }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} {...rest}>
            {text}
        </button>
    )
    
}

// function teste(name: string) : string {
//     return name;
// }
