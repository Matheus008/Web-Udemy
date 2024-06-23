import Link from "next/link"
import Styles from "@/styles/Navegador.module.css"

export default function Navegador(props) {
    return (
        <Link href={props.destino} passHref>
            <div className={Styles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
            {props.texto}
            </div>
        </Link>
    )
}