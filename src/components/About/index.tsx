import { TypeAnimation } from 'react-type-animation';


const About = () => {
  return(
    <div id="sobre" className="js-show-on-scroll h-screen w-full bg-gradient-to-b from-green-900  to-black ">
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center text-center'>
        <h2 className='sm:text-5xl text-4xl font-bold text-green-500 mb-5'>Algumas coisas sobre mim...</h2>
        <h6 className='flex sm:text-3xl text-2xl pt-2 text-green-500'> 
        Tenho 24 anos e sou apaixonado por desenvolver soluções que agreguem valor, tanto para as empresas onde atuo, quanto para projetos privados e iniciativas pessoais.
        <br /><br />
        Possuo experiência em diversas tecnologias, incluindo C#, ReactJs, VueJs, Typescript e Dynamics AX, entre outras.
        <br /><br />
        Além da minha paixão pela tecnologia, adoro trabalhar em equipe e trocar ideias sobre desenvolvimento, animes, investimentos e uma variedade de outros assuntos. Sempre busco criar um ambiente descontraído por onde passo, e estou em constante busca por autoaperfeiçoamento.
        <br /><br />
        Fora do âmbito profissional, tenho alguns hobbies que me cativam. Sou um ávido leitor, gosto de passear por shoppings e tenho um grande interesse por animes, séries, filmes e jogos de FPS.
        </h6>
      </div>
    </div>
  )
}

export default About;