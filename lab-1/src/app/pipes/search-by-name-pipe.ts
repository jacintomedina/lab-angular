import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../model/index.model';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(users: UserModel[], value: string): UserModel[] {
    const cleanValue = value.trim().toLowerCase()
    if (cleanValue.length < 3) return users;
    return users.filter((user) => user.name.toLowerCase().includes(cleanValue));
  }
}
