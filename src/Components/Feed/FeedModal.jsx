<<<<<<<< HEAD:front/src/Components/Feed/FeedModal.jsx
import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import ModalContent from '../Content/ModalContent';

const FeedModal = ({foto, setModal}) => {
    const {data, error, loading, request} = useFetch();

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(foto.id);
        request(url, options);
    }, [foto, request]);

    function handleOutsideClick(event) {
        if(event.target === event.currentTarget) setModal(null)
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <ModalContent data={data} />}
            <img src={foto.src} alt="" />
        </div>
    )
}

========
import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import ModalContent from '../Content/ModalContent';

const FeedModal = ({foto}) => {
    const {data, error, loading, request} = useFetch();

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(foto.id);
        request(url, options);
    }, [foto, request]);

    return (
        <div className={styles.modal}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <ModalContent data={data} />}
            <img src={foto.src} alt="" />
        </div>
    )
}

>>>>>>>> parent of dd5c0a7 (Merge branch 'main' of https://github.com/orodrigobraz/Trabalho-Final-ProgramacaoWeb):src/Components/Feed/FeedModal.jsx
export default FeedModal;