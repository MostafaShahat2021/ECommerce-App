import { Link } from 'react-router-dom';

export default function UnauthPage() {
  return (
    <div >
      <h2>Opps </h2>
      <p>You are not authorized to view this page!</p>
      <Link to="/auth/login">Go back to home</Link>
    </div>
  )
}