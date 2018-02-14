$(function() {
  var analyze_count = 0;
  var ancient_count = 0;
  var mistic_count = 0;
  var radiant_count = 0;

  $('#analyze_plus').click(function() {
    $('#analyze_counter').text(++analyze_count);
  });
  $('#analyze_minus').click(function() {
    $('#analyze_counter').text(--analyze_count);
  });

  $('#ancient_plus').click(function() {
    $('#ancient_counter').text(++ancient_count);
  });
  $('#ancient_minus').click(function() {
    $('#ancient_counter').text(--ancient_count);
  });

  $('#mistic_plus').click(function() {
    $('#mistic_counter').text(++mistic_count);
  });
  $('#mistic_minus').click(function() {
    $('#mistic_counter').text(--mistic_count);
  });

  $('#radiant_plus').click(function() {
    $('#radiant_counter').text(++radiant_count);
  });
  $('#radiant_minus').click(function() {
    $('#radiant_counter').text(--radiant_count);
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

});