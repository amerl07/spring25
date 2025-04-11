//Import here (components, libraries)
import { useState } from 'react';
import './App.css'
import ShoppingList from './ShoppingList';

//Component Functions
function App() {
    const [shoppingList, setShoppingList] = useState([]); //useState returns array with two values
    //declare a state variable named "shoppingList, the function updating it is named "setShoppingList"
    //the "[]" argument passed in is the initial state. An empty shopping list.

    const [budget] = useState(100);

    const addItem = (event) => { //addItem is declared using const. It is an event handler function.
        event.preventDefault(); //Prevents the default browser action for the event.
        let form = event.target;
            //"let" declaration declares a re-assignable local variable
        let formData = new FormData(form) //"FormData" constructor creates a new FormData object
        let formDataObj = Object.fromEntries(formData.entries())
        formDataObj.cost = parseFloat(formDataObj.cost || 0);
        
        setShoppingList([...shoppingList, formDataObj])
        form.reset();
    }

    const removeItem = (event) => {
        const name = event.target.value;
        setShoppingList(shoppingList.filter(item => item.name !== name)); //removing the item
    };

    return ( //returning html here!
        <>
            <h1>Shopping List Manager</h1>
            <div className='card'>
                <form onSubmit={addItem} className='flex-apart'> 
                    <input type="text" name="name" placeholder='Add item to list...' />
                    <input type="number" name="cost" placeholder="Cost" />
                    <button className='btn purple' type='submit'>Add</button>
                </form>
            </div>
 
            <form onSubmit={addItem} className='flex-apart'> 

</form>

            <ShoppingList
                shoppingList={shoppingList}
                removeItem={removeItem}
                budget={budget}
            />
        </>
    );
 }
 
 export default App;