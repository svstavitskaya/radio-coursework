const validation = new JustValidate('#form--modal', {
    errorLabelCssClass: 'modal-form--invalid',
    errorLabelStyle: {
        color: '#FF6F6F',
    }
});

validation
    .addField('#login', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },

        {
            rule: 'minLength',
            value: 3,
        },
    ])

    .addField('#password', [
        {
            rule: 'password',
        },
    ])