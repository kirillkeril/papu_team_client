import {Input} from "../UIKit/Input/Input";
import {Button} from "../UIKit/Button/Button";
import styles from './productForm.module.css'
import {useState} from "react";
export const ProductForm = () => {
    const initial = {
        name: '',
        price: 0,
        description: '',
        category: '',
        amount: 0,
    };
    const [product, setProduct] = useState(initial);



    return (
    <form>
        <Input
            onChange={(e) => setProduct({...product, name: e.target.value})}
            name={'name'}
            placeholder={'Название'}
            id={'name'}
        />
        <Input
            onChange={(e) => setProduct({...product, name: e.target.value})}
            name={'desc'}
            placeholder={'Описание'}

            id={'desc'}
        />
        <select>
            <option>aa</option>
            <option>bb</option>
            <option>cc</option>
        </select>
        <div>
            <Input
                onChange={(e) => setProduct({...product, name: e.target.value})}
                name={'price'}
                placeholder={'Цена'}

                id={'price'}
            />
            <Input
                onChange={(e) => setProduct({...product, name: e.target.value})}
                name={'amount'}
                placeholder={'Кол-во товара'}

                id={'amount'}
            />
        </div>
        <Button>Принять</Button>
    </form>
    );
}