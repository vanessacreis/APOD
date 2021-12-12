$("#button").click(function () {
  let data = $("#date").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=p4VIf5SgsXlfNnBBfMfSJ77eemNlw1ek6m2amrZy&date=${data}`,
    type: "GET",
    success: function (apod) {
      console.log(apod);
      $("#foto").attr("src", apod.url);
      $("#titulo").text(apod.title);
      $("#texto").text(apod.explanation);
    },
  });
});
