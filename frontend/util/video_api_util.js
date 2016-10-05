export const fetchAllVideos = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/videos",
    success,
    error
  });
};

export const newVideo = (video, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/videos",
    data: { video },
    success,
    error
  });
};

export const fetchVideo = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/videos/${id}`,
    success,
    error
  });
};

export const editVideo = (id, video, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/videos/${id}`,
    data: { video },
    success,
    error
  });
};

export const destroyVideo = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${id}`,
    success,
    error
  });
};
