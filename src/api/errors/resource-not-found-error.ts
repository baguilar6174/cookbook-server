import { CustomError } from './custom-error';

export class ResourceNotFoundError extends CustomError {
    statusCode = 404;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}