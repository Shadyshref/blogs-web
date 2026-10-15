import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity.js';
import { User } from '../../user/entities/user.entity.js';

@ObjectType()
export class Like {
 @Field(()=>Int)
  id: number;

@Field(()=>[User])
    users: User[];

@Field(()=>[Post])
    posts: Post[];
    
    @Field()
    CreatedAt: Date;
    
}
