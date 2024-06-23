import Navegador from "@/src/components/Navegador"
import Link from "next/link"

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="red"/>
            <Navegador texto="Exemplo" destino="/exemplo"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42a9a9"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a"/>
        </div>
    )
}