export function getSubscriptions(id, success){
  $.ajax({
    method: "GET",
    url: "/api/subscriptions",
    data: { id },
    success
  });
}

export function newSubscription(subscription, success, isAsync){
  $.ajax({
    method: "POST",
    url: "/api/subscriptions",
    data: { subscription },
    success,
    async: isAsync
  });
}

export function destroySubscription(id, success, isAsync){
  $.ajax({
    method: "DELETE",
    url: `/api/subscriptions/${id}`,
    success,
    async: isAsync
  });
}
