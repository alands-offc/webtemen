import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/Auth.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('Login berhasil!');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleLogin} className={styles.button}>Login</button>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}
