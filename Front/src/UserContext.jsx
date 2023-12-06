import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './Api';
import { Link, useNavigate } from 'react-router-dom';

export const UserContext = React.createContext()

 export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogout = React.useCallback(async function () {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
    }, []);

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usuario: username,
                    senha: password,
                }),
            });
      
            if (response.ok) {
                const result = await response.json();
                if (result.token) {
                    window.localStorage.setItem('token', result.token);
                    await getUser(result.token);
                    setLogin(true);
                    navigate('/conta');
                } else {
                    console.log('Token não encontrado na resposta.');
                }
            } else {
                console.log('Credenciais inválidas!!');
                setLogin(false);
            }
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if(token) {
                try {
                    setError(null);
                    setLoading(true);
                    const {url, options} = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if(!response.ok) throw new Error('Token inválido!');
                    await getUser(token);
                } catch (err) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>{children}</UserContext.Provider>
    )
}