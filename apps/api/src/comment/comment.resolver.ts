import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentService } from './comment.service.js';
import { Comment } from './entities/comment.entity.js';
import { CreateCommentInput } from './dto/create-comment.input.js';
import { UpdateCommentInput } from './dto/update-comment.input.js';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

 
}
