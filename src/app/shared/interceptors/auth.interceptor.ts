import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

const API_KEY = 'f82ecbb7a5110caecaee2bee5e4c79d6';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  if (req.method === 'GET') {
    req = req.clone({
      setParams: {
        api_key: API_KEY,
      }
    })
  }

  return next(req);
};
