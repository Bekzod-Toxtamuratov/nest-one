import { User } from "../../models/user.models";
export const userStub=():Partial<User>=>{
      return {
        id: 1,
        name: 'user1',
        email: 'user1@mgail.com',
        password: '123456',
        is_active: true,
      }
    
}