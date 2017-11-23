import { ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {

  public authNotifier:ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(public storage: Storage) {
    console.log('AuthService');

    // check if there is a token in storage
    this.storage.get('token').then(token => {
      if(token != null) {
        // broadcast that we are logged in
        this.authNotifier.next(true);
      }
    });
  }

  login(credentials) {
    this._checkCredentials(credentials).then(token => {
      // save token to storage
      this.storage.set('token', token);
      // broadcast that we are now logged in
      this.authNotifier.next(true);
    });
  }

  _checkCredentials(credentials) {
    // here you would of course check the credentials for real
    // probably using a http request or a library of the service
    // you are authenticating against
    return new Promise(function(resolve, reject) {
      // in this example we just resolve with a token
      resolve({token: '123'});
    });
  }

  logout() {
    // remove token from storage
    this.storage.remove('token');
    // broadcast that we are now logged out
    this.authNotifier.next(false);
  }

}
