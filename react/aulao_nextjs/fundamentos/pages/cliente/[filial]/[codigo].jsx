import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";

export default function ClienteProCodigo() {
    const router = useRouter();
    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Filial = {router.query.filial}</div>
            <div>Código = {router.query.codigo}</div>
        </Layout>
    )
}