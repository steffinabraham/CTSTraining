import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../../../../../Backend/models/user_m';

@Pipe({
    name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {
    transform(users: User[], searchTerm: string): User[] {
        if (!users || !searchTerm) {
            return users;
        }

        return users.filter(user =>
            user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}