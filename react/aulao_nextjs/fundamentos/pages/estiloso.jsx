import Layout from "@/src/components/Layout";
import Link from "next/link";
import Style from "@/styles/Estiloso.module.css"

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={Style.roxo}>
                <h1>Estiloso Online</h1>
            </div>
        </Layout>

    )
}