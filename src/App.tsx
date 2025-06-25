// src/App.jsx
import FormMessage from './components/Form'

export default function App() {
  return (
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    <div className="absolute left-1/2 transform -translate-x-1/2 h-[max] w-max flex flex-col items-center mt-[10rem]">
      <h1 className="text-2xl font-bold text-center text-3xl">Generador de Mensajes Laborales</h1>
      <FormMessage />
    </div>
    </>
  );
}
