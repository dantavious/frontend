import {
  Injectable
} from '@angular/core';
import {
  Socket
} from 'ngx-socket-io';
import { Observable } from 'rxjs';
import {
  map
} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {

  constructor(private socket: Socket) {}

  sendMessage() {
    this.socket.emit("hello");
  }

  // getMessage() {
  //   return this.socket.fromEvent('message').pipe(map((data) => data.msg));
  // }

}