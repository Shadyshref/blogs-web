import { ObjectType, Field, Int } from '@nestjs/graphql';
import   { Post } from '../../post/entities/post.entity.js';
import { User } from '../../user/entities/user.entity.js';

type WrapperType<T> = T;

@ObjectType()
export class Comment {
  
  @Field(()=>Int)
  id: number;

 @Field()
 content: string;

 @Field(()=>[Post])
 post:WrapperType<Post>

 @Field(()=>[User]) 
 author:WrapperType<User>

@Field()
 createdAt: Date;
}
