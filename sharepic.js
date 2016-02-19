if (Meteor.isClient) {
  var img_data = [{
    img_src:"pik.png",
    img_alt:"pik logo"
  },
  {
    img_src:"pik.png",
    img_alt:"pik logo"
  },
  {
    img_src:"pik.png",
    img_alt:"pik logo"
  },
  {
    img_src:"pik.png",
    img_alt:"pik logo"
  },
  {
    img_src:"pik.png",
    img_alt:"pik logo"
  }
  ];
  Template.images.helpers({images:img_data});
}

if (Meteor.isServer) {
  console.log("I'm the Server!");
}
