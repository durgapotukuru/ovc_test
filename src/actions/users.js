export const FETCH_USER = "FETCH_USER";

export const fetchUser = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => data.json())
            .then((data) => {
                // console.log(data);
                dispatch({
                    type: FETCH_USER,
                    users: data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}