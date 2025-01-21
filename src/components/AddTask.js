import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Tache requis')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }


  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Tache</label>
            <input 
            type="text"
            placeholder="Ajoutez votre tache..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            >
            </input>
        </div>
        <div className="form-control">
            <label>Jour & Heure</label>
            <input 
            type="text"
            placeholder="Ajoutez l'heure et la date..."
            value={day}
            onChange={(e) => setDay(e.target.value)}
            >
            </input>
        </div>
        <div className="form-control form-control-check">
            <label>Définir un rappel</label>
            <input 
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            >
            </input>
        </div>

        <input className="btn btn-block" type="submit" value='Enregistrer'></input>
    </form>
  )
}

export default AddTask