import { Link } from "react-router-dom";
import "../Menu/Menu.module.css"

function Menu() {
    return(
		
		<nav>
			<ul>
				
			<li><Link to="/sobreNos">Sobre nós</Link></li>
				<li><Link to="/contato">Contato</Link></li>
				<li><Link to="/">Index</Link></li>

			</ul>
		</nav>
    );
}

export default Menu;