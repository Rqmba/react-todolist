import Button from "./Button";

const Header = ({ title = 'Suivi de taches' }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='Ajouter' />
    </header>
  )
}

export default Header;
