import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';

const useLogin = () => {
  const Navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserName = (value: string) => {
    setUserName(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onSubmit = () => {
    Navigation.navigate(SCREEN.HOME_SCREEN);
  };

  return {userName, onChangeUserName, password, onChangePassword, onSubmit};
};
export default useLogin;
//() => {
//   Navigation.navigate(SCREEN.HOME_SCREEN);
// };
