import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TLogin } from '@/types/login/login';
import { fetchPostLogin } from '../login.service';

export const handleLogin = async (loginData: TLogin, navigate: (path: string) => void) => {
    const response = await fetchPostLogin(loginData);
    if (response.status === 'success') {
        // เก็บข้อมูลลงใน LocalStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('firstname', response.data.firstname);
        localStorage.setItem('user_id', response.data.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isNotificationVisible', 'true');
        // แสดงแจ้งเตือน Toast
        toast.success(response.message);
        navigate('/todo');
    } else {
        // แสดงแจ้งเตือนถ้า login ล้มเหลว
        toast.error(response.message);
    }

}