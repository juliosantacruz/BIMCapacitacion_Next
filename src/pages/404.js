import styled from "styled-components"
import Image from "next/image"
import LostImage from '../assets/img/undraw_lost_404.png'
import Link from "next/link";


 function Custom404({className}) {
    return (<>
    <div className={className}>

    <h1>404 - Pagina no Encontrada</h1>
    <Image src={LostImage} width={500} alt='page not found'></Image>
    <Link href='/'>Inicio</Link>
    </div>
    </>)
  }

  export default styled(Custom404)`
  display:flex;
  flex-direction: column;
  align-content: center;
  justify-content:center;
  align-items:center;
  height:calc(100vh - 200px);

  text-align:center;
  padding: 40px 0;
  img{
    min-width:280px;
    width:30%;
    object-fit:contain;
  }
  a:hover{
    border-bottom:solid 2px black;
  }
  `