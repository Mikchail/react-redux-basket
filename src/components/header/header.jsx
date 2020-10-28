import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = (props) => {
  const {basket} = props;
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="main-menu">
            <li className="main-menu__item">
              <Link to="/">Shop</Link>
            </li>
            <li className="main-menu__item">
              <Link to="/addgood">Add good</Link>
            </li>
            <li
              className={`main-menu__item main-menu__item--basket ${
                basket.length ? ' active' : ''
              }`}
            >
              <Link to="/basket">
                <svg
                  width="25"
                  height="27"
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.9"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8794 10.1882H12.3993V6.44536H8.67903V3.95014H12.3993V0.207306H14.8794V3.95014H18.5997V6.44536H14.8794V10.1882ZM4.97601 23.9118C4.97601 22.5394 6.07968 21.4165 7.44377 21.4165C8.80785 21.4165 9.92392 22.5394 9.92392 23.9118C9.92392 25.2841 8.80785 26.407 7.44377 26.407C6.07968 26.407 4.97601 25.2841 4.97601 23.9118ZM19.8402 21.4169C18.4761 21.4169 17.3724 22.5398 17.3724 23.9121C17.3724 25.2845 18.4761 26.4074 19.8402 26.4074C21.2042 26.4074 22.3203 25.2845 22.3203 23.9121C22.3203 22.5398 21.2042 21.4169 19.8402 21.4169ZM18.0432 15.1785H8.80456L7.44048 17.6737H22.3214V20.1689H7.44048C5.55556 20.1689 4.36508 18.1353 5.27034 16.4635L6.94444 13.4193L2.48016 3.94997H0V1.45475H4.05506L9.3378 12.6832H18.0432L22.8423 3.94997L25 5.14768L20.2133 13.8934C19.7917 14.6669 18.9732 15.1785 18.0432 15.1785Z"
                    fill="white"
                  />
                </svg>

                <span className="span">{basket.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
