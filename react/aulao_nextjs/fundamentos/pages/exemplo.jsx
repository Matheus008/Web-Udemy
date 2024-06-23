import Cabecalho from "@/src/components/Cabecalho";
import Layout from "@/src/components/Layout";
import Link from "next/link";

export default function Exemplo() {
    return (
        <Layout titulo="Exemplo">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprendendo Next.js"/>
        </Layout>
    )
}