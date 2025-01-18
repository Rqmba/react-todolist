const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <label>Tache</label>
            <input 
            type="text"
            placeholder="Ajoutez votre tache..."
            >
            </input>
        </div>
        <div className="form-control">
            <label>Jour & Heure</label>
            <input 
            type="text"
            placeholder="Ajoutez l'heure et la date..."
            >
            </input>
        </div>
        <div className="form-control">
            <label>Set Reminder</label>
            <input 
            type="checkbox"
            >
            </input>
        </div>

        <input type="submit" value='Save Task'></input>
    </form>
  )
}

export default AddTask