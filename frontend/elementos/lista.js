import { SelectList } from 'react-native-dropdown-select-list'

const Lista = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Simvastatina', disabled:true},
      {key:'2', value:'Aspirina'},
      {key:'3', value:'Omeprazol'},
      {key:'4', value:'Lexotiroxina Sodica', disabled:true},
      {key:'5', value:'Ramipril'},
      {key:'6', value:'Amlodipina'},
      {key:'7', value:'Paracetamol'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )

};
export default Lista;