import { NavLink } from 'react-router-dom';
import styles from "./Header.module.less"
const Header =()=>{
    return(
        <div className={styles.header}>
            <div>

            </div>
            <div className={styles.headerMiddle}>
                <ul>
                    <li>
                        <NavLink to="/home">
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/braft">
                            braft
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Header