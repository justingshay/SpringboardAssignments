import React, {useState } from 'react';

const ItemForm = ({onItemSubmit}) => {
    const INIT_DATA = {
        name: '',
        qty: '',
        purpose: ''
    };

    const [data, setData] = useState(INIT_DATA);
    const [errors, setErrors] = useState({});

    function handleInputChange(event) {
        const {name, value} = event.target;

        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function validateForm() {
        let formErrors = {};
        let alertString = '';

        if(data.name.length <= 1) {
            formErrors.name = true;
            alertString += 'Enter item full name\n';
        }
        if(data.qty <= 0) {
            formErrors.qty = true;
            alertString += 'Item quantity must be greater than 0\n';
        }
        if(data.purpose.length <= 1) {
            formErrors.purpose = true;
            alertString += 'Enter full purpose for item';
        }

        if(alertString !== '') {
            alert(alertString);
            alertString = '';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isValid = validateForm();

        if(isValid) {
            const newItem = {
                ...data,
                id: (Math.random()*100)*(Math.random()*100)
            };

            onItemSubmit(newItem);
            setData(INIT_DATA);
            setErrors({});
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Add Item to Inventory</h2>
            <input 
                type='text'
                name='name'
                placeholder='Item Name'
                value={data.name}
                required
                onChange={handleInputChange}
            />
            <input 
                type='number'
                name='qty'
                placeholder='Quantity'
                value={data.qty} 
                required
                onChange={handleInputChange}
            />
            <input 
                type='text'
                name='purpose'
                placeholder='Purpose'
                value={data.purpose}
                required
                onChange={handleInputChange}
            />
            <button type='submit'>
                Add Item
            </button>
        </form>
    );
}

export default ItemForm;