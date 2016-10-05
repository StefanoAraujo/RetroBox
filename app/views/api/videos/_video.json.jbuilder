json.extract! video, :id, :title, :description, :video_url, :views

json.username video.user.username
json.created_date video.created_at.to_date
json.thumbnail_url asset_path(video.thumnail.url)
