import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration" />
        <strong>Create live QA forums</strong>
        <p>Resolve people's questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>
            Create a new forum
          </h2>
          <form>
            <input 
              type="text" 
              placeholder="Name of the forum"
            />
            <Button type="submit">
              Create Forum
            </Button>
          </form>
          <p>Do you want to go to a existing forum? <Link to="/">Click here</Link></p>
        </div>
      </main>
    </div>
  )
}