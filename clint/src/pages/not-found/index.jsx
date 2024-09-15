import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p> Opps Page not exist !</p>
      <Link to="/auth/login">Go back to home</Link>
    </div>
  );
}
