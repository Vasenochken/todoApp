import Filters from "./listBtnFilters/filters.js";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
                <Filters />
            <button className="clearCompleted">Clear Completed</button>
        </footer>
    );
}

export default Footer;