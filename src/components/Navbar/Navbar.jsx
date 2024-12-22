import '@/components/Navbar/Navbar.scss';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="tabs">
            <div className="tab"><NavLink exact to="/">Публикации</NavLink></div>
            <div className="tab"><NavLink to="/search">Поиск</NavLink></div>
            <div className="tab"><NavLink to="/profile">Профиль</NavLink></div>
        </div>
    );
}
