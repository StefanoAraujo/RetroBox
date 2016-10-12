class Api::VideosController < ApplicationController
  def create
    if video_params[:thumbnail] === "null"
      @errors = ["Thumbnail is required"]
      render json: @errors, status: 422
      return
    end

    @video = Video.new(video_params)
    if @video.save
      render :create
    else
      @errors = @video.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def index
    search_strings = params[:query].split(" ").map { |string| "%#{string}%" }
    where_string = ""
    search_string_array = []

    while search_strings.length > 0
      where_string = where_string + " OR " if where_string.length > 0
      string = search_strings.pop
      where_string = where_string + "UPPER(title) LIKE UPPER(?) OR UPPER(description) LIKE UPPER(?)"
      search_string_array << string
      search_string_array << string
    end

    @videos = Video.where(where_string, *search_string_array).includes(:user)

    render :index
  end

  def show
    @video = Video.includes(comments: [:user, likes: [:user]], likes: [:user]).find(params[:id])
    if @video
      @video.views = @video.views + 1;
      @video.save
      render :show
    else
      render nil, status: 404
    end
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    render :destroy
  end

  def update
    @video = Video.find(params[:id])
    if @video
      if @video.update(video_params)
        render :update
      else
        @errors = @video.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  private
  def video_params
    params.require(:video).permit(
      :title,
      :description,
      :user_id,
      :thumbnail,
      :video
    )
  end
end
