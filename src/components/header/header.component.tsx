import React, {useState} from 'react';
import './header.component.scss';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-left-content">
                    <img src={require('../../assets/logo.png')} alt=""/>
                </div>
                <div className="header-right-content">
                    <div className="header-right-content-lang">
                        <div className="header-right-content-lang-country">
                            <img src={require('../../assets/languages/romanian-lang.png')} alt=""/>
                        </div>
                        <div className="header-right-content-lang-code">
                            <span>RO</span>
                        </div>
                    </div>
                    <div className="header-right-content-fav">
                        <FavoriteIcon className="favorite-icon"/>
                    </div>
                    <div className="header-right-content-user-acc">
                        <div className="header-user-photo">
                            <PersonIcon className="person-icon"/>
                        </div>
                    </div>
                    <div className="header-right-content-menu">
                        <MenuIcon className='menu-icon' onClick={toggleNav}/>
                        <div id="mySidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Clients</a>
                            <a href="#">Contact</a>
                        </div>
                        <div id="main" className={`${isOpen ? 'open' : ''}`}/>
                    </div>
                </div>
            </div>
            <hr className='hr'/>
        </div>
    );
}

export default HeaderComponent;
