import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import styles from '../styles/Auth.module.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            setMessage('Pendaftaran berhasil! Silakan periksa email Anda untuk verifikasi.');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Signup</h1>
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
            <button onClick={handleSignup} className={styles.button}>Signup</button>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}
