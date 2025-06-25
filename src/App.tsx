import FormMessage from './components/Form'
import { RepositoryLink } from './components/repositoryLink.tsx';
import "./App.css"

export default function App() {
  return (
    <>
      <main className="absolute bg-white rounded shadow left-1/2 transform -translate-x-1/2 w-screen md:w-max h-[max] flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center text-3xl">Searching job tool👨‍💼</h1>
        <FormMessage />
      </main>
      <RepositoryLink />
    </>
  );
}
