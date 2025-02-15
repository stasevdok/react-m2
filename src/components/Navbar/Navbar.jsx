import '@/components/Navbar/Navbar.scss';
import { NavLink } from "react-router-dom";
import logoMini from '@/assets/logo-mini.svg';
import icon from '@/assets/icon.svg';

export default function Navbar() {
    return (
        <div className="tabs">
            <NavLink exact to="/"><img src={logoMini}></img></NavLink>
            <div className="tab"><NavLink exact to="/">Лента</NavLink></div>
            <div className="tab"><NavLink to="/search">Поиск</NavLink></div>
            <div className="tab"><NavLink to="/styleguide">Стайлгайд</NavLink></div>
            <div className="button"><NavLink to="/profile">Войти<img src={icon} className="button-icon"></img></NavLink></div>
        </div>
    );
}
