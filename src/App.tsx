import FormMessage from './components/Form'
import "./App.css"

export default function App() {
  return (
    <main className="absolute left-1/2 transform -translate-x-1/2 w-screen md:w-[80%] h-[max] flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center text-3xl">Searching job tool👨‍💼</h1>
      <FormMessage />
    </main>
  );
}
