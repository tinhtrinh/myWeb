import { useSelector } from 'react-redux';

const User = () => {
    const user = useSelector(state => state.user.user);
    return (
        <div>{user.name}</div>
    )
}

export default User