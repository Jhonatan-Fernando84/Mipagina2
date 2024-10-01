import { Link } from 'react-router-dom';
import './HeaderComponte.css';

const links = [
  {
    name: "Inicio",
    href: "/home",
  },
  {
    name: "Productos",
    href: "/productos",
  },
  {
    name: "Servicios",
    href: "/servicios",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
]

export const HeaderComponte= () => {
  return (
      <nav>
        <ul>
          {links.map((x, index) => (
             <li key={index}><Link to={x.href}>{x.name}</Link></li>
          ))}
        </ul>
      </nav>
  );
};

