import Button from "./Button";

const Header = ({ title = 'Suivi de taches', onAdd, showAdd }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button 
        color={showAdd ? 'Red' : 'Green'} 
        text={showAdd ? 'Fermer' : 'Ajouter'}
        onClick={onAdd} 
        />
    </header>
  )
}

export default Header;
