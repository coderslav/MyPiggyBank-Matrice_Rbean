import React from 'react';

function Table(props) {
    return (
        <table className='table table-sm text-center'>
            <tbody>
                <tr className='table-light'>
                    <td>
                        <b>Name</b>
                    </td>
                    <td>
                        <b>Description</b>
                    </td>
                    <td>
                        <b>Price</b>
                    </td>
                    <td></td>
                </tr>
                {props.entries.map((el) => {
                    return (
                        <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.desc}</td>
                            <td>{el.price}</td>
                            <td>
                                <button type='button' value={el.id} onClick={props.deleteHandler} className='btn-close' aria-label='Delete'></button>
                            </td>
                        </tr>
                    );
                })}
                <tr className='table-light'>
                    <td></td>
                    <td></td>
                    <td>
                        <b>∑</b>: {props.updateTotal()}
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
