import styles from '@/styles/TopBar.module.css';
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const TopBar = () => {
    return (
			<div className={styles.topBar}>
				<nav className={styles.nav}>
					<span>
						<FaMapMarkerAlt size={20} color='blue' />
						JJCF+VX4, Batumi
					</span>
					<span>
						<FaPhoneSquareAlt size={20} color='blue' />
						+9955195615
					</span>
					<span>
						<MdEmail size={20} color='blue' />
						metalgroup@gmail.com
					</span>
				</nav>
			</div>
		)
}

export default TopBar;