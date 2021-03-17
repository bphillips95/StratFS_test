import Person from './Person'
import {useState} from 'react'

export default function BalanceSheet({data}) {

    const [AllChecked, setAllChecked] = useState(true)

    const handleMapping = data.map(d => <Person 
        id={d.id} person={d} AllChecked={AllChecked} />)
    
    return (
        <div>
            <button className="btn" onClick={() => setAllChecked(!AllChecked)} > 
                {AllChecked === false ? 'Check Boxes' : 'Uncheck Boxes' }
            </button>
            Creditor | First Name | Last Name | Min Pay | Balance
            {handleMapping}
        </div>
    )
}
