import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return(
    <div id="main" className="js-show-on-scroll h-screen w-full bg-gradient-to-b from-black  to-green-900 ">
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center text-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-green-500'>Eu sou Rafael</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-2 text-green-500'> 
        <TypeAnimation
          sequence={[
            'Eu sou um Desenvolvedor  :)',
            2000,
            'Eu sou um Analista de Sistema .NET :)',
            2000,
            'Eu sou um Gamer :)',
            2000,
            'Eu sou um Curioso por tecnologia :)',
            2000
          ]}
          wrapper="div"
          speed={50}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        />
        </h2>
      </div>
    </div>
  )
}

export default Main;