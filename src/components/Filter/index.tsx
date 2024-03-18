import React, {FC} from "react";

type Props = {
    filterFunction: Function;
    sortByFunc: Function;
}

export const Filter: FC<Props> = ({filterFunction, sortByFunc}) => {
    const changeHandler = (e: { target: { value: any; }; }) => {
        filterFunction(e.target.value);
    };

    return (
        <div className="filter">
            <div className="search">
                <input className="input" type="text" placeholder="Search Product" onChange={changeHandler}/>
            </div>
        </div>
    );
};