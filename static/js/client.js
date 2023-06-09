const api = (() => {
    // Private
    const url = 'http://into.azurewebsites.net';

    const upload = (form, formData) => {
        return new Promise(
            (resolve, reject) => {
                $.ajax({
                    type: form.method,
                    url: '/' + form.action.split('/')[3],
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        resolve(response);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            }
        );
    };

    const getImage = () => {
        return new Promise(
            (resolve, reject) => {
                $.ajax({
                    type: "GET",
                    url: '/gallery',
                    success: function (response) {
                        resolve(response);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            }
        );
    };

    const charge = () => {
        return new Promise(
            (resolve, reject) => {
                $.ajax({
                    type: "GET",
                    url: '/charge',
                    success: function (response) {
                        resolve(response);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            }
        );
    };

    // Public
    return {
        getImage: getImage,
        upload: (form, formData) => {
            return upload(form, formData);
        },
        charge: charge
    };
})();