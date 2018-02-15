$(function() {
  var analyze_count = 0;
  var ancient_count = 0;
  var mistic_count = 0;
  var radiant_count = 0;
  var deck_count = 37;

  var changeDeckCount = function (modifyNumber) {
    if ($('.sync_deck:checked').val() != 1) return;
    deck_count += modifyNumber;
    $('#deck_counter').text(deck_count);
    $('#deck_num').val(deck_count);
  };

  $('#analyze_plus_one').click(function() {
    changeDeckCount(1);
    $('#analyze_counter').text(++analyze_count);
  });
  $('#analyze_plus_two').click(function() {
    changeDeckCount(2);
    analyze_count += 2;
    $('#analyze_counter').text(analyze_count);
  });
  $('#analyze_minus').click(function() {
    changeDeckCount(-1);
    $('#analyze_counter').text(--analyze_count);
  });

  $('#ancient_plus_one').click(function() {
    changeDeckCount(1);
    $('#ancient_counter').text(++ancient_count);
  });
  $('#ancient_plus_two').click(function() {
    changeDeckCount(2);
    ancient_count += 2;
    $('#ancient_counter').text(ancient_count);
  });
  $('#ancient_minus').click(function() {
    changeDeckCount(-1);
    $('#ancient_counter').text(--ancient_count);
  });

  $('#mistic_plus_one').click(function() {
    changeDeckCount(1);
    $('#mistic_counter').text(++mistic_count);
  });
  $('#mistic_plus_two').click(function() {
    changeDeckCount(2);
    mistic_count += 2;
    $('#mistic_counter').text(mistic_count);
  });
  $('#mistic_minus').click(function() {
    changeDeckCount(-1);
    $('#mistic_counter').text(--mistic_count);
  });

  $('#radiant_plus_one').click(function() {
    changeDeckCount(1);
    $('#radiant_counter').text(++radiant_count);
  });
  $('#radiant_plus_two').click(function() {
    changeDeckCount(2);
    radiant_count += 2;
    $('#radiant_counter').text(radiant_count);
  });
  $('#radiant_minus').click(function() {
    changeDeckCount(-1);
    $('#radiant_counter').text(--radiant_count);
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
  });

  $('#reset_deck').click(function() {
    deck_count = 37;

    $('#deck_counter').text(deck_count);
    $('#deck_num').val(deck_count);
  });

  $('#deck_num').change(function() {
    var ch = $('#deck_num').val();
    $('#deck_counter').text(ch);
  });
});

