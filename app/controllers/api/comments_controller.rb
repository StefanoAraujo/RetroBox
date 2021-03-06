class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :create
    else
      @errors = @comment.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :destroy
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment
      if @comment.update(comment_params)
        render :update
      else
        @errors = @comment.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end
  private
  def comment_params
    params.require(:comment).permit(:video_id, :user_id, :body)
  end
end
