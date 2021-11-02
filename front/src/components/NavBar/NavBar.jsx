import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <div>
                        <li>Logo</li>
                        <li>About Us</li>
                        <li>Out Products</li>
                    </div>

                    <div>
                        <li><FontAwesomeIcon icon={faShoppingBag} /></li>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;