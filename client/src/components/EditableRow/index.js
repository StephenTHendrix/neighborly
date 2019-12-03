import React from "react";

function EditableRow(props) {
    return (
        <div>
            {props.toggle === "view" ? (
                <tr onClick={props.onClick}>
                    <td>{props.property}</td>
                    <td>{props.value}</td>
                </tr>
            ) : (
                    <table>
                        <tr>
                            <td>{props.property} </td>
                            <td>
                                <input
                                    type="text"
                                    name={props.name}
                                    value={props.value}
                                    onChange={props.onChange}
                                ></input>
                            </td>
                        </tr>
                    </table>
                )}
        </div>
    );
}

export default EditableRow;
