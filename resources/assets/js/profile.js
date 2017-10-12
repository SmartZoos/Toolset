$(function () {
    var moment = require('moment/moment.js');
    moment.locale(window.Laravel.locale);

    var apiUrl = window.Laravel.apiUrl;
    var hasAnalytics = !!window.ga;

    function handleGa() {
        if ( hasAnalytics ) {
            ga.apply(this, arguments);
        }
    }

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    $('button#send-to-backpack').on('click', function() {
        handleGa('send', 'event', 'Badges', 'click', 'User initialized sending badges to Backpack');

        $.getJSON(apiUrl + '/badges/mine', function(data) {
            if ( _.size(data) > 0 ) {
                var assertions = _.map(data, function(single) {
                    return single.assertion;
                });
                OpenBadges.issue(assertions, function(errors, successes) {
                    handleGa('send', 'event', 'Badges', 'issue', 'User sent badges to Backpack', assertions.length, { nonInteraction: true });

                    if ( successes.length > 0 ) {
                        handleGa('send', 'event', 'Badges', 'issueSuccesses', 'Number of badges successfully issued', successes.length, { nonInteraction: true });
                        var badges = [];
                        _.each(data, function(single) {
                            if ( _.indexOf(successes, single.assertion) !== -1 ) {
                                badges.push(single.badge);
                            }
                        });
                        $.post(apiUrl + '/badges/mine', { badges: badges }, null);
                    }
                });
            }
        });
    });

    $('button.openbadge-download').on('click', function() {
        var url = 'http://backpack.openbadges.org/baker?assertion=' + window.encodeURIComponent($(this).data('assertion-url'));
        window.open(url, '_blank', '', false);
    });

    $('button.discount-voucher-spend').on('click', function(e) {
        e.preventDefault();
        var thisElement = $(this),
            parentElement = thisElement.parents('.discount-voucher');

        parentElement.removeClass('animated shake');

        if ( confirm(thisElement.data('confirm')) ) {
            thisElement.prop('disabled', true);
            $.ajax({
                url: apiUrl + '/vouchers/' + thisElement.data('voucher-id'),
                type: 'DELETE',
                cache: false,
                success: function(data) {
                    //console.log(data);
                    parentElement.fadeOut('slow', function() {
                        $(this).remove();
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    thisElement.prop('disabled', false);
                    parentElement.addClass('animated shake');
                    //console.log(jqXHR, textStatus, errorThrown);
                }
            });
        }
    });

    $('.discount-voucher').each((index, voucher) => {
        const voucherElement = $(voucher);

        voucherElement.find('.valid-until > span').text( moment(voucherElement.data('valid-until')).format('LLL') );
    });
});
