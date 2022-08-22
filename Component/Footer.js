import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div>
            <div className={styles.grupo1}>
                <div className={styles.box}>
                    <figure>
                        <a href='#'>
                            <img src="https://nohestmm.github.io/SCL009-hackathon-peliculas/src/img/logo.png" alt='Logo de TravelingSpace'></img>
                        </a>
                    </figure>
                </div>
                <div className={styles.box}>
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit esse assumenda enim asperiores, aliquid quos placeat molestiae soluta </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et rem placeat facilis explicabo fugit in aut voluptatem doloremque sapiente facere dolore deserunt omnis, asperiores soluta nihil perferendis quasi voluptatibus hic?</p>
                </div>
                <div className={styles.box}>
                    <h2>SIGUENOS</h2>
                    <div>
                        <IconButton color="primary">
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton color="primary">
                            <InstagramIcon></InstagramIcon>
                        </IconButton>
                        <IconButton color="primary">
                            <TwitterIcon></TwitterIcon>
                        </IconButton>
                        <IconButton color="primary">
                            <TelegramIcon></TelegramIcon>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className={styles.grupo2}>
                <small>&copy; 2022 <b>TravelingSpace</b> - Todos los derechos reservados </small>
            </div>

        </div>

    )
}

export default Footer;