import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");

    const submit = (e) => {
        e.preventDefault();
        addTodo(title, desc, category);
        setTitle("");
        setDesc("");
        setCategory("");
    }

    const clear = (e) => {
        e.preventDefault();
        setTitle("");
        setDesc("");
        setCategory("");
    }

    return (
        <>
            <div className='container my-3'>
                <h2>Add Todo</h2>
                <form className="row g-3 needs-validation" onSubmit={submit}>
                    <div className="col-md-9">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" placeholder='Add title' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select className="form-select" id="category" value={category} onChange={(e) => { setCategory(e.target.value) }} required>
                            <option disabled value="">Select category</option>
                            <option value="Important">Important</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="validationTextarea" className="form-label">Description</label>
                        <textarea className="form-control" id="validationTextarea" placeholder="Add description" style={{ height: "100px" }} value={desc} onChange={(e) => { setDesc(e.target.value) }} required></textarea>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary me-1" type="submit">Submit form</button>
                        <button className="btn btn-danger ms-1" type="reset" onClick={clear}>Reset form</button>
                    </div>
                </form>
            </div>
        </>
    )
}
