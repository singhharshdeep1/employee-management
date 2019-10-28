const ALLOWED_DOMAINS = ['@performance.ca'];


export function isEmailAuthorized(email: string): boolean {
    for (let domain in ALLOWED_DOMAINS) {
      if (email.includes(ALLOWED_DOMAINS[domain])) {
        return true;
      }
    }

    return false;
}