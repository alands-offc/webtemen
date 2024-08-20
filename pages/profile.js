import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import styles from '../styles/Profile.module.css';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // State untuk mode login/register
    const [error, setError] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError('');
        } catch (error) {
            setError('Login gagal. Periksa kembali email dan password Anda.');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setError('');
        } catch (error) {
            setError('Pendaftaran gagal. Email mungkin sudah terdaftar atau password terlalu lemah.');
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    if (!user) {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{isRegistering ? 'Daftar' : 'Masuk'}</h1>
                <form className={styles.form} onSubmit={isRegistering ? handleRegister : handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        required
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.button}>
                        {isRegistering ? 'Daftar' : 'Masuk'}
                    </button>
                </form>
                <p className={styles.toggleText}>
                    {isRegistering ? 'Sudah punya akun? ' : 'Belum punya akun? '}
                    <span
                        className={styles.toggleLink}
                        onClick={() => setIsRegistering(!isRegistering)}
                    >
                        {isRegistering ? 'Masuk' : 'Daftar'}
                    </span>
                </p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Profil Saya</h1>
            <img src={user.photoURL || '/images/default-profile.png'} alt="Foto Profil" className={styles.profileImage} />
            <p className={styles.detail}><strong>Nama:</strong> {user.displayName || 'Pengguna'}</p>
            <p className={styles.detail}><strong>Email:</strong> {user.email}</p>
            <p className={styles.detail}><strong>Email Verifikasi:</strong> {user.emailVerified ? 'Terverifikasi' : 'Belum Terverifikasi'}</p>
            <button className={styles.button} onClick={handleLogout}>Logout</button>
        </div>
    );
}
