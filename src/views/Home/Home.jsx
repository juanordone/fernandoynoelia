import Cabecera from "../../components/Cabecera/Cabecera";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import TarjetaHistoria from "../../components/TarjetaHistoria/TarjetaHistoria";

export default function Home(){
    return(
        <>
        <Cabecera/>
        <CountdownTimer/>
        <Tarjeta/>
        <TarjetaHistoria/>
        </>
    )
}