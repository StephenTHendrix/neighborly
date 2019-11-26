import React from "react";

function EditableRow(props) {
    return (
        {
            props.toggle === "view" ? (
                <tr>
                    <td>{props.property}</td>
                    <td>{props.value}</td>
                </tr>
            )
                :
                (<tr>
                    <td>{props.property} </td>
                    <td><input type="text" value={props.value}> </input>{props.value}</td>
                </tr>
                )
        }
    );
}

export default EditableRow;
