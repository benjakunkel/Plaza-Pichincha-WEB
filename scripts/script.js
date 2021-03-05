$(window).on('load', function(){
    $.instagramFeed({
      'username': 'benjakunkel',
      'container': "#instagram-feed-demo",
      'display_profile': true,
      'display_biography': false,
      'display_igtv': false,
      'items': 8,
      'items_per_row': 4,
      'margin': 0.5,
      'image_size': 840,
      'lazy_load': false,
      'cache_time': 360,
      'on_error': console.error
    });
  });
