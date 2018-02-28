$(function() {
  var analyze_count = 0;
  var ancient_count = 0;
  var mistic_count = 0;
  var radiant_count = 0;
  var deck_count = 37;

  var probability = function() {
    var analyze = (analyze_count / deck_count * 100).toFixed(3);
    $('#analyze_probability').text(analyze);
    var ancient = (ancient_count / deck_count * 100).toFixed(3);
    $('#ancient_probability').text(ancient);
    var mistic = (mistic_count / deck_count * 100).toFixed(3);
    $('#mistic_probability').text(mistic);
    var radiant = (radiant_count / deck_count * 100).toFixed(3);
    $('#radiant_probability').text(radiant);
  }

  var changeDeckCount = function(modifyNumber) {
    if ($('.sync_deck:checked').val() != 1) return;
    deck_count += modifyNumber;
    $('#deck_counter').text(deck_count);
    $('#deck_num').val(deck_count);
    probability();
  };

  $('#analyze_plus_one').click(function() {
    $('#analyze_counter').text(++analyze_count);
    changeDeckCount(1);
  });
  $('#analyze_plus_two').click(function() {
    analyze_count += 2;
    $('#analyze_counter').text(analyze_count);
    changeDeckCount(2);
  });
  $('#analyze_minus').click(function() {
    $('#analyze_counter').text(--analyze_count);
    changeDeckCount(-1);
  });

  $('#ancient_plus_one').click(function() {
    $('#ancient_counter').text(++ancient_count);
    changeDeckCount(1);
  });
  $('#ancient_plus_two').click(function() {
    ancient_count += 2;
    $('#ancient_counter').text(ancient_count);
    changeDeckCount(2);
  });
  $('#ancient_minus').click(function() {
    $('#ancient_counter').text(--ancient_count);
    changeDeckCount(-1);
  });

  $('#mistic_plus_one').click(function() {
    $('#mistic_counter').text(++mistic_count);
    changeDeckCount(1);
  });
  $('#mistic_plus_two').click(function() {
    mistic_count += 2;
    $('#mistic_counter').text(mistic_count);
    changeDeckCount(2);
  });
  $('#mistic_minus').click(function() {
    $('#mistic_counter').text(--mistic_count);
    changeDeckCount(-1);
  });

  $('#radiant_plus_one').click(function() {
    $('#radiant_counter').text(++radiant_count);
    changeDeckCount(1);
  });
  $('#radiant_plus_two').click(function() {
    radiant_count += 2;
    $('#radiant_counter').text(radiant_count);
    changeDeckCount(2);
  });
  $('#radiant_minus').click(function() {
    $('#radiant_counter').text(--radiant_count);
    changeDeckCount(-1);
  });

  $('#deck_plus_two').click(function() {
    changeDeckCount(2);
  });
  $('#deck_minus').click(function() {
    changeDeckCount(-1);
  });
  $('#deck_machina').click(function() {
    changeDeckCount(-6);
  });

  $('#reset').click(function() {
    analyze_count = 0;
    ancient_count = 0;
    mistic_count = 0;
    radiant_count = 0;

    $('#analyze_counter').text(analyze_count);
    $('#ancient_counter').text(ancient_count);
    $('#mistic_counter').text(mistic_count);
    $('#radiant_counter').text(radiant_count);
    probability();
  });

  $('#reset_deck').click(function() {
    deck_count = 37;

    $('#deck_counter').text(deck_count);
    $('#deck_num').val(deck_count);
    probability();
  });

  $('#deck_num').change(function() {
    var ch = $('#deck_num').val();
    $('#deck_counter').text(ch);
    probability();
  });

  // 以下からミラー用
  $('#mirror_mode').change(function() {
    if ($(this).is(':checked')) {
      $('#mirror').show();
      $('#mirror_header').show();
    } else {
      $('#mirror').hide();
      $('#mirror_header').hide();
    }

    var mirror_analyze_count = 0;
    var mirror_ancient_count = 0;
    var mirror_mistic_count = 0;
    var mirror_radiant_count = 0;
    var mirror_deck_count = 37;

    var mirror_probability = function() {
      var analyze = (mirror_analyze_count / mirror_deck_count * 100).toFixed(3);
      $('#mirror_analyze_probability').text(analyze);
      var ancient = (mirror_ancient_count / mirror_deck_count * 100).toFixed(3);
      $('#mirror_ancient_probability').text(ancient);
      var mistic = (mirror_mistic_count / mirror_deck_count * 100).toFixed(3);
      $('#mirror_mistic_probability').text(mistic);
      var radiant = (mirror_radiant_count / mirror_deck_count * 100).toFixed(3);
      $('#mirror_radiant_probability').text(radiant);
    }

    var mirror_changeDeckCount = function(modifyNumber) {
      if ($('.mirror_sync_deck:checked').val() != 1) return;
      mirror_deck_count += modifyNumber;
      $('#mirror_deck_counter').text(mirror_deck_count);
      $('#mirror_deck_num').val(mirror_deck_count);
      mirror_probability();
    };

    $('#mirror_analyze_plus_one').click(function() {
      $('#mirror_analyze_counter').text(++mirror_analyze_count);
      mirror_changeDeckCount(1);
    });
    $('#mirror_analyze_plus_two').click(function() {
      mirror_analyze_count += 2;
      $('#mirror_analyze_counter').text(mirror_analyze_count);
      mirror_changeDeckCount(2);
    });
    $('#mirror_analyze_minus').click(function() {
      $('#mirror_analyze_counter').text(--mirror_analyze_count);
      mirror_changeDeckCount(-1);
    });

    $('#mirror_ancient_plus_one').click(function() {
      $('#mirror_ancient_counter').text(++mirror_ancient_count);
      mirror_changeDeckCount(1);
    });
    $('#mirror_ancient_plus_two').click(function() {
      mirror_ancient_count += 2;
      $('#mirror_ancient_counter').text(mirror_ancient_count);
      mirror_changeDeckCount(2);
    });
    $('#mirror_ancient_minus').click(function() {
      $('#mirror_ancient_counter').text(--mirror_ancient_count);
      mirror_changeDeckCount(-1);
    });

    $('#mirror_mistic_plus_one').click(function() {
      $('#mirror_mistic_counter').text(++mirror_mistic_count);
      mirror_changeDeckCount(1);
    });
    $('#mirror_mistic_plus_two').click(function() {
      mirror_mistic_count += 2;
      $('#mirror_mistic_counter').text(mirror_mistic_count);
      mirror_changeDeckCount(2);
    });
    $('#mirror_mistic_minus').click(function() {
      $('#mirror_mistic_counter').text(--mirror_mistic_count);
      mirror_changeDeckCount(-1);
    });

    $('#mirror_radiant_plus_one').click(function() {
      $('#mirror_radiant_counter').text(++mirror_radiant_count);
      mirror_changeDeckCount(1);
    });
    $('#mirror_radiant_plus_two').click(function() {
      mirror_radiant_count += 2;
      $('#mirror_radiant_counter').text(mirror_radiant_count);
      mirror_changeDeckCount(2);
    });
    $('#mirror_radiant_minus').click(function() {
      $('#mirror_radiant_counter').text(--mirror_radiant_count);
      mirror_changeDeckCount(-1);
    });

    $('#mirror_deck_plus_two').click(function() {
      mirror_changeDeckCount(2);
    });
    $('#mirror_deck_minus').click(function() {
      mirror_changeDeckCount(-1);
    });
    $('#mirror_deck_machina').click(function() {
      mirror_changeDeckCount(-6);
    });

    $('#mirror_reset').click(function() {
      mirror_analyze_count = 0;
      mirror_ancient_count = 0;
      mirror_mistic_count = 0;
      mirror_radiant_count = 0;

      $('#mirror_analyze_counter').text(mirror_analyze_count);
      $('#mirror_ancient_counter').text(mirror_ancient_count);
      $('#mirror_mistic_counter').text(mirror_mistic_count);
      $('#mirror_radiant_counter').text(mirror_radiant_count);
      mirror_probability();
    });

    $('#mirror_reset_deck').click(function() {
      mirror_deck_count = 37;

      $('#mirror_deck_counter').text(mirror_deck_count);
      $('#mirror_deck_num').val(mirror_deck_count);
      mirror_probability();
    });

    $('#mirror_deck_num').change(function() {
      var ch = $('#mirror_deck_num').val();
      $('#mirror_deck_counter').text(ch);
      mirror_probability();
    });
    // ここまで
  });
});
