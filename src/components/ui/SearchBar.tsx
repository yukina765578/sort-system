import React from "react";

function SearchBar() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Form submitted");
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type something"
            />
        </form>
    )
}

export default SearchBar;