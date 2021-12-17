import React, {useState} from "react";
import {Image} from "react-bootstrap";

import "./Style/Main.scss";

export default function AddItems() {

    const [addItem, setAddItem] = useState([{name: '', price: '', img: ''}]);
    const handelChangeInput = (index, event) => {
        const values = [...addItem];
        values[index][event.target.name] = event.target.value;
        setAddItem(values);
    }
    const handelAddItem = () => {
        setAddItem([...addItem, {name: '', price: '', img: ''}])
    }
    const handelDeleteItem = (index) => {
        const values = [...addItem];
        values.splice(index, 1);
        setAddItem(values);
    }

    return(
        <div className="main-add-items-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>ADD & DELETE ITEMS</h1>
                    </div>
                    <div className="col-12">
                        {addItem.map((addItem, index) => <div className="item" key={index}>
                            <div className="img">
                                <label htmlFor="upload-photo" className="upload-photo">Product Photo <i className="fa fa-upload"> </i> </label>
                                <input type="file" id="upload-photo" name="myImage" />
                                {addItem.img.length > 0 ? <Image src={addItem.image} /> : null}
                            </div>
                            <div className="form">
                                <input type="text" name="name" placeholder="Product Name" value={addItem.name} onChange={event => handelChangeInput(index, event)}/>
                                <input type="number" name="price" placeholder="Product price" value={addItem.price} onChange={event => handelChangeInput(index, event)} />
                                <button className="add" onClick={() => handelAddItem()}>ADD</button>
                                <button className="delete" onClick={() => handelDeleteItem()}>DELETE</button>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}