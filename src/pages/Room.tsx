import { useParams } from 'react-router-dom';

import { RoomCode } from '../components/RoomCode';
import { Button } from '../components/Button';

import logoImg from '../assets/images/logo.svg';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeAsk" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>ReactJs Course</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea placeholder="What is your question?" />

          <div className="form-footer">
            <span><button>Login</button> to ask your questions</span>
            <Button type="submit">Send question</Button>
          </div>
        </form>
      </main>
    </div>
  );
}