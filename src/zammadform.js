$(function() {
    $('#zammad.js-feedback-form').ZammadForm({
        messageTitle: 'Feedback Form',
        messageSubmit: 'Submit',
        messageThankYou: 'Thank you for your inquiry (#%s)! We\'ll contact you as soon as possible.',
        modal: true
    });
});