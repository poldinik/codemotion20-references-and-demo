import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, BookService } from 'src/backend-connector';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly restClient: RestClientService,
    private readonly auth: AuthenticationService,
    private readonly bookService: BookService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const isUserAuthenticated = !!this.restClient.getAccessToken();

    if (isUserAuthenticated) {
      this.router.navigate(['']);
    }
  }

  login() {
    // this.auth.login({username: 'ciao', password: 'ciao'}).subscribe((v) => {
    //   console.log('esempio login', v);
    //   this.restClient.setAccessToken(v.accessToken);
    //   this.bookService.findBooks(0, 100).subscribe((books) => {
    //     console.log('books', books);
    //   })
    // });
  }
}
