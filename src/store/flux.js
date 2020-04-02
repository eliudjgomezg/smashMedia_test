const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            subscribers:[],
            photos: [],
            posts: [],
            post: {
                id:'',
                name:'',
                title:'',
                post:'',
            },
            index:''
        },

        actions: {
            setSubscribers: (subscribers, photos) => {
              setStore({subscribers: subscribers, photos: photos});
            },
            check: (e) => {
                console.log(e.target.checked)
                e.target.data? setStore({status: true}) : setStore({status: false});
            },
            setPost: (createdPost) => {
                const store = getStore();
                const posts = store.posts;
                posts.push(createdPost);
                setStore({posts})
            },
            setPut: (editedPost) => {
                const store = getStore();
                const posts = store.posts;
                posts[store.index] = editedPost;
                setStore({posts})
            },
            setdelete: (data) => {
                const store = getStore();
                const postsList = store.posts;
                const posts = postsList.filter(p => p.post != data)
                setStore({posts})  
            },
            like: (p, i, e) => {
                const store = getStore();
                const dataList = store.posts;
                const like = p.like;
        
                if (like === '') {
                    dataList[i].like = 'red';
                    setStore({ posts: dataList });
                } else {
                    dataList[i].like = '';
                    setStore({ posts: dataList });
                }
            },
            dataEditForm: (data, i) => {
                const store = getStore();
                setStore({post:{
                    id:data.id,
                    name:data.name,
                    title:data.title,
                    post:data.post,
                },
                index: i
            });
            },
            handleChange: (e) => {
                const {name, value} = e.target;
                setStore({[name] : value})
            }
        }
    } 
}
export default getState;