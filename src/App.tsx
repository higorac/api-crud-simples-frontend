import { useEffect, useState, useRef } from 'react'
import './App.css'
import api from './services/api'

// Interface baseada nos dados que queremos receber/enviar
interface Pessoa {
  id?: string;
  name: string;
  email: string;
  age: string;
}

function App() {
  // Estados do formulário
  const [users, setUsers] = useState<Pessoa[]>([])

  const inputName = useRef<HTMLInputElement>(null)
  const inputAge = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers(){
    await api.post('/usuarios', {
      name: inputName.current?.value || '',
      email: inputEmail.current?.value || '',
      age: inputAge.current?.value || '',
    })
    getUsers()
  }

  async function deleteUsers(id: string){
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
<div className="neumorphic-container">
      <h2 className="neumorphic-title">Cadastro de Pessoas</h2>
      
      <form className="neumorphic-form">
        <input 
          type="text" 
          placeholder="Nome" 
          required
          className="neumorphic-input"
          ref={inputName}
        />
        <input 
          type="email" 
          placeholder="E-mail" 
          required
          className="neumorphic-input"
          ref={inputEmail}
        />
        <input 
          type="text" 
          placeholder="Idade" 
          required 
          min="0"
          className="neumorphic-input"
          ref={inputAge}
        />
        <button type="submit" className="neumorphic-button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      <h2 className="neumorphic-title">Pessoas Cadastradas</h2>
      
      <ul className="neumorphic-list">
        {users.map((user: Pessoa) => (
          <li key={user.id} className="neumorphic-list-item">
            <div>
              <strong>{user.name}</strong> - {user.email} ({user.age} anos)
            </div>
            
            <button 
              type="button"
              className="neumorphic-delete-button"
              onClick={() => deleteUsers(user.id!)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
