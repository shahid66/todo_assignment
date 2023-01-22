import Swal from "sweetalert2"
import store from "../redux/store/store"
import { EDITTODO } from "../redux/state-slice/todoSlice"

export function EditToDo (i,item){
     Swal.fire({
        input: 'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EDITTODO({index:i,todo:value}))
            }
        }
        
      })
      
      
}