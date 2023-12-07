<<<<<<<< HEAD:front/src/Components/User/User.jsx
import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPost from './UserPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const User = () => {
    const {data} = React.useContext(UserContext);

    return (
        <section className='container'>
            <Head title='Meus livros'/>
            <UserHeader />
            <Routes>
                <Route path='/' element={<Feed user={data?.id} />} />
                <Route path='postar' element={<UserPost />} />
                <Route path='estatisticas' element={<UserStats />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </section>
    )
}

========
import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPost from './UserPost';
import UserStats from './UserStats';

const User = () => {
    return (
        <section className='container'>
            <UserHeader />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='postar' element={<UserPost />} />
                <Route path='estatisticas' element={<UserStats />} />
            </Routes>
        </section>
    )
}

>>>>>>>> parent of dd5c0a7 (Merge branch 'main' of https://github.com/orodrigobraz/Trabalho-Final-ProgramacaoWeb):src/Components/User/User.jsx
export default User;