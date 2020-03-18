import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const sendAjax = (url, body = {}) => of(body).pipe(
  map((objJSON) => JSON.stringify(objJSON)),
  switchMap((query) => ajax({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: query,
  })),
);

export default sendAjax;
