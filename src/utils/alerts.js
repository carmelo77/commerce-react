import { notification } from 'antd';

export const error = ( text ) => {
    notification['error']({
      message: text  
    });
}

export const success = ( text ) => {
    notification['success']({
        message: text  
    });
}