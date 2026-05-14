import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [cursos, setCursos] = useState([])

  const url_cursos = "https://my-json-server.typicode.com/GitParaAula/fake-api/cursos"

  const carregarCursos = async () => {
    try {
      const resposta = await fetch(url_cursos)
      const dados = await resposta.json()
      setCursos(dados)
      console.log("oi função0")
    } catch (erro) {
      console.error("Erro ao carregar os dados:", erro)
    }
  }

  useEffect(() => { carregarCursos() }, [])

  return (
    <div className="container">
      <h1>Lista de Cursos</h1>

      {cursos.map((curso) => (
        <div className="card">
          <h2>{curso.nome}</h2>
          <p>Id:{curso.id}</p>
          <p>Carga horária: {curso["carga-horaria"]}  h</p>

          <div className="disciplinas">
            {curso.disciplina.map((disc) => (
              <span className="disciplina">{disc}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;