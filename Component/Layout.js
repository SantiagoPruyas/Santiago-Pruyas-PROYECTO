import NavBar from "../Component/NavBar" ;
import Footer from "../Component/Footer";
import styles from "../styles/Layout.module.css"

export default function Layout ({children}) {
    return (
        <>
        <NavBar></NavBar>
        <main>{children}</main>
        <footer className={styles.piedepagina}>
              <Footer></Footer>
        </footer>
        </>
    )
}