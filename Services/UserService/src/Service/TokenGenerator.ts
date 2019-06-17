import { Service } from 'typedi';
// @ts-ignore
import * as bin2hex from 'locutus/php/strings/bin2hex';
// @ts-ignore
import * as randombytes from 'randombytes';

@Service()
export class TokenGenerator {

    public generateToken(): string {
        return bin2hex.default(randombytes.default(32));
    }

}
