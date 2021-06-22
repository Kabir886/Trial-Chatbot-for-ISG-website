var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Greetings of the day, welcome to ISG website'
}).then(function () {
  return botui.message.add({
    delay: 800,
    loading: true,
    content: 'How can I help you today?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Contact Us',
        value: 'Contact Us'
      },
      {
        text: 'Fees Structure',
        value: 'Fees Structure'
      },
      {
        text: 'Academic Calendar',
        value: 'Academic Calendar'
      },
      {
        text: 'Our Founder',
        value: 'Founder'
      },
      {
        text: 'Video Gallery',
        value: 'Video'
      },
      {
        text: 'Our Principal',
        value: 'Principal'
      },
      {
        text: 'Photo Gallery',
        value: 'Albums'
      },
      {
        text: 'School Timings',
        value: 'Timings'
      }
    ]
  });
}).then(function (res) {
  var message;
  

  if (res.value === "Contact Us") {
    message= 'Please contact us for any queries<br><br><a href="https://kabir886.github.io/Isg-revised-pages-website/contact%20us.html">link</a>'
  }
  if (res.value === "Principal") {
    message= 'Our Principal<br><br><a href="https://kabir886.github.io/Isg-revised-pages-website/principal.html">link</a>'
  }
  else if (res.value === "Fees Structure") {
    message = 'Fees Structure<br><br><a href="https://kabir886.github.io/Isg-revised-pages-website/fees.html">link</a>'
  }
  else if (res.value === "Video") {
    message = 'Video Gallery<br><br><a href="https://kabir886.github.io/Isg-revised-pages-website/videogallery.html">link</a>'
  }
  else if (res.value === "Albums") {
    message = 'Our Photo Gallery<br><br><a href="https://kabir886.github.io/Isg-revised-pages-website/albums.html">link</a>'
  }
  else if (res.value === "Academic Calendar") {
    message= 'Academic Calendar<br><br><a href="https://www.indianschool.com/downloads/calendar/Academic_Calendar.pdf">link</a>'
  }
  else if (res.value === "Founder") {
    message= 'Our Founder<br><br><a href="https://kabir886.github.io/Isg-revised-pages-website/founder.html">link</a>'
  }
  else if (res.value === "Timings") {
    message= 'Our School Timings<br><br><a href="https://kabir886.github.io/Isg-revised-pages-website/schooltimings.html">link</a>'
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function () {
  return botui.message.add({
    delay: 700,
    loading: true,
    content: 'I hope it helps'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Yes,thanks ',
        value: 'Yes'
      }
    
      
    ]
  });
});