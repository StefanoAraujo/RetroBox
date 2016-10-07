json.list_videos @videos.each do |video|
  json.id video.id
  json.title video.title
  json.description video.description
  json.username video.user.username
  json.thumbnail_url asset_path(video.thumbnail.url)
end