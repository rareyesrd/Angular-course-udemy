import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
    transform(name: string, limit: number): string {
        if (name.length > limit) {
            return `${name.substr(0, limit)} ...`;
        }
        return name;
    }
}
