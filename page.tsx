import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import styles from '../app/page.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Hero />
            <h1 className={styles.headerTitle}>Homepage</h1>
            <h2 className={styles.heroTitle}>This is the homepage</h2>
            <Footer />
        </div>
    );
};

export default HomePage;

