import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.leftText}>
                        <p>Nonton Anime Terlengkap</p>
                    </div>
                    <div className={styles.letters}>
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(letter => (
                            <span key={letter}>{letter}</span>
                        ))}
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.textLogo}>Lexxyy</div>
                    <p>Hak Cipta © 2024 Lexxyy. Semua Hak Dilindungi</p>
                    <p>Penafian: Situs ini Lexxyy tidak menyimpan file anime apapun di server. Semua konten telah disediakan oleh pihak ketiga yang tidak terafiliasi.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
