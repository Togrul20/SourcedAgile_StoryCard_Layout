////////////////////////////////////////////// Mezuniyyet buttons
$(document).ready(function () {
  $(".mezuniyyet").click(function (e) {
    $(".sub-mezun").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".in-mezun input:nth-child(1)").click(function (e) {
    $(".mezuns").toggle(e.target);
  });
});


////////////////////////////////////////////// Ezamiyyet buttons
$(document).ready(function () {
  $(".ezamiyye").click(function (e) {
    $(".sub-ezamiyye").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".in-ezamiyye input:nth-child(1)").click(function (e) {
    $(".ezamiyyes").toggle(e.target);
  });
});


////////////////////////////////////////////// Resept buttons
$(document).ready(function () {
  $(".resept").click(function (e) {
    $(".sub-resept").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".in-resept input:nth-child(1)").click(function (e) {
    $(".resepts").toggle(e.target);
  });
});


////////////////////////////////////////////// Qiymet Cedveli satis buttons
$(document).ready(function () {
  $(".qcs").click(function (e) {
    $(".sub-qcs").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".in-qcs input:nth-child(1)").click(function (e) {
    $(".qcss").toggle(e.target);
  });
});


////////////////////////////////////////////// Mehsulun silinmesi buttons
$(document).ready(function () {
  $(".msil").click(function (e) {
    $(".sub-msil").toggle(e.target);
  });
});


////////////////////////////////////////////// Techizat alisi iade button
$(document).ready(function () {
  $(".tecali").click(function (e) {
    $(".sub-tecali").toggle(e.target);
  });
});


////////////////////////////////////////////// Anbar teleb ve transferi buttons
$(document).ready(function () {
  $(".att").click(function (e) {
    $(".sub-att").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".in-att input:nth-child(1)").click(function (e) {
    $(".atts").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".atts .container:nth-child(1) input:nth-child(1)").click(function (e) {
    $(".atts .container:nth-child(2)").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".atts .container:nth-child(3) input:nth-child(1)").click(function (e) {
    $(".atts .container:nth-child(4)").toggle(e.target);
  });
});


////////////////////////////////////////////// Mehsul konvertasiyasi button
$(document).ready(function () {
  $(".mkonvert").click(function (e) {
    $(".sub-mkonvert").toggle(e.target);
  });
});


////////////////////////////////////////////// Mehsul sayimi buttons
$(document).ready(function () {
  $(".msay").click(function (e) {
    $(".sub-msay").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".in-msay input:nth-child(1)").click(function (e) {
    $(".msays").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".msays .container:nth-child(1) input:nth-child(1)").click(function (e) {
    $(".msays .container:nth-child(2)").toggle(e.target);
  });
});

$(document).ready(function () {
  $(".msays .container:nth-child(3) input:nth-child(1)").click(function (e) {
    $(".msays .container:nth-child(4)").toggle(e.target);
  });
});
