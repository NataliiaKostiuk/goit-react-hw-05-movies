import { Watch } from 'react-loader-spinner';
import { LoadWraper } from './Loader.styled';

export const Loader = () => {
    return (
        <LoadWraper>
          <Watch color="#07c04dd2" height={100} width={100}/>  
        </LoadWraper>
    )
}