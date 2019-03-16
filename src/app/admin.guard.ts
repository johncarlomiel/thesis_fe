import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import * as io from 'socket.io-client';
import { config } from "./configs/config";
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  chatSocket: SocketIOClient.Socket
  constructor(private router: Router,
    private userService: UserService) {
    this.chatSocket = io(config.ip + "chat");
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem("AdminAuthorization") != "" && localStorage.getItem("AdminAuthorization") != null) {
      let payload = this.userService.getPayload(localStorage.getItem("AdminAuthorization"));

      this.chatSocket.emit('login', payload.id);

      return true;


    } else {

      this.router.navigate(["/404"])
      return false;
    }
  }
}
