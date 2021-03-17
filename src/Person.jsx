import {useState, useEffect} from 'react'

export default function Person({person,AllChecked,id}) {

    const [isChecked, setIsChecked] = useState(AllChecked)

    useEffect(() => {
       setIsChecked(AllChecked)
    }, [AllChecked])

    return (
        <div>
            <label>
        <input type="checkbox" 
        id={id}
        checked={isChecked} 
        onChange={()=> setIsChecked(!isChecked)} 
        /> 
      </label>
          |
            {person.creditorName} |
            {person.firstName}  | {person.lastName}
            |
            {person.minPaymentPercentage}
            |
            {person.balance}
        </div>
    )
}
