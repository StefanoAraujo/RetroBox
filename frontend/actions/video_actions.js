export const ALL_VIDEOS = "ALL_VIDEOS";
export const ONE_VIDEO = "ONE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const NEW_VIDEO = "NEW_VIDEO";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

export function allVideos(){
  return({
    type: ALL_VIDEOS
  });
}

export function oneVideo(id){
  return({
    type: ONE_VIDEO,
    id
  });
}

export function updateVideo(video, cb){
  return({
    type: UPDATE_VIDEO,
    video,
    cb
  });
}

export function deleteVideo(id){
  return({
    type: DELETE_VIDEO,
    id
  });
}

export function newVideo(video, cb){
  return({
    type: NEW_VIDEO,
    video,
    cb
  });
}

export function receiveVideos(videos){
  return({
    type: RECEIVE_VIDEOS,
    videos
  });
}

export function receiveVideo(video){
  return({
    type: RECEIVE_VIDEO,
    video
  });
}

export function removeVideo(video){
  return({
    type: REMOVE_VIDEO,
    video
  });
}
