import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity.js';
import { Tag } from '../../tag/entities/tag.entity.js';
import { Comment } from '../../comment/entities/comment.entity.js';

@ObjectType()
export class Post {
  @Field(() => Int)
 id: number;

 @Field()
  title: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  thumbnail?: string;

  @Field()
  content: string;

  @Field(()=>Boolean)
  published: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(()=>[User])
  authors: User[];

  @Field(()=>[Tag])
    tags: Tag[];


    @Field(()=>[Comment])
    comments: Comment[];
 
 
 
}
