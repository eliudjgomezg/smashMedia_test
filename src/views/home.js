import React, { useContext, useEffect } from "react";
import '../App.css';
import PostsList from '../components/homeComponents/postsList';
import { Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';
import { Context } from "../store/appContext";

const Home = () => {
    const { actions, store } = useContext(Context);
    //Defining useState
    const [data, setData] = React.useState({ postsList: [], photosList: [], usersList: [] });
    const [loading, setloading] = React.useState({status:false});

    //Calls to server
    const getData = async () => {
        try {

            setloading({...loading, status:true});
            const postsList = await axios('https://jsonplaceholder.typicode.com/posts?userId=1');
            const photoList = await axios('https://jsonplaceholder.typicode.com/photos?albumId=1');
            const usersList = await axios('https://jsonplaceholder.typicode.com/users');
            const postsListIcon = postsList.data.map(p => Object.assign(p, { like: '' }))
            setData({ ...data, postsList: postsListIcon, photosList: photoList.data, usersList: usersList.data })
            actions.setSubscribers(usersList.data, photoList.data);
            setloading({...loading, status:false});

        } catch (error) {
            console.log(error);
        }
    }
    const like = (p, i, e) => {
        const dataList = data.postsList;
        const like = p.like;

        if (like === '') {
            dataList[i].like = 'red';
            setData({ ...data, postsList: dataList });
        } else {
            dataList[i].like = '';
            setData({ ...data, postsList: dataList });
        }
    }

    useEffect(() => {
        getData();

    }, []);
    return (
        <>
        <Dimmer inverted className='addLoaderPosition' active={loading.status}>
        <Loader inverted>Cargando......</Loader>
        </Dimmer>
        <PostsList {...data} like={like} />
        </>
    );
}

export default Home;