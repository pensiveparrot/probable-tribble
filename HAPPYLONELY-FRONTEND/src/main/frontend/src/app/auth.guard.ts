import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { AuthService } from './common/service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.loggedIn()) {
    return true;
  } else {
    return false;
  }
};

