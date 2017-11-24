
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

$(document).ready(function() {
    // Delete button comnfirmation and consequent POST
    $('a[data-method="delete"]').on('click', function(e) {
        e.preventDefault();
        var _this = $(this);

        if ( confirm( _this.data('confirm') ) ) {
            var form = $('<form>', {
                method: 'POST',
                action: _this.data('action')
            });

            form.append($('<input>', {
                type: 'hidden',
                name: '_method',
                value: 'DELETE'
            }));
            form.append($('<input>', {
                type: 'hidden',
                name: '_token',
                value: window.Laravel.csrfToken
            }));

            form.appendTo('body');
            form.submit();
        } else {
            _this.trigger('blur');
        }
    });

    // Setting locale
    $('.sz-set-locale').on('click', function(e) {
        e.preventDefault();
        $(document).find('form#locale-form').attr('action', $(this).attr('href')).submit();
    });

    // Handling cookie consent
    const cookieConsentKey = 'cookie:consent';
    const hasGivenConsent = window.localStorage && window.localStorage.getItem(cookieConsentKey) === 'true';

    if ( !hasGivenConsent ) {
        $('#sz-cookie-consent')
            .addClass('fadeInUp animated')
            .css('display', '')
            .find('button').on('click', function() {
                $(this).parents('#sz-cookie-consent').addClass('fadeOutDown');
                if ( window.localStorage ) {
                    try {
                        window.localStorage.setItem(cookieConsentKey, 'true');
                    } catch (err) {
                        // Handles the QuotaExceededError in some versions of Safari on iOS
                    }
                }
            });
    }

    $('a[data-toggle="discountVoucher"]').on('click', function(e) {
        e.preventDefault();
        $(this).parent().next('.row').slideToggle();
    });
});
