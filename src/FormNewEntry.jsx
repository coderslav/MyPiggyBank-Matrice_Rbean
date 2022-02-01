import React from 'react';

export default function FormNewEntry(props) {
    return (
        <form onSubmit={props.handleNewEntry}>
            <h3 className='mb-2 text-center'>Add new expense</h3>
            <div className='input-group mb-1'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>Name</span>
                </div>
                <input type='text' name='name' className='form-control' />
                <div className='input-group-prepend'>
                    <span className='input-group-text'>Price</span>
                </div>
                <input type='number' step='0.01' name='price' className='form-control' />
            </div>
            <div className='input-group-prepend'>
                <span className='input-group-text'>Description</span>
            </div>
            <div className='input-group mb-1'>
                <textarea className='form-control' name='description' />
            </div>
            <div className='d-grid'>
                <button type='submit' className='btn btn-outline-success'>
                    Add expense
                </button>
            </div>
        </form>
    );
}
