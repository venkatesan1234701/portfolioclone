/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



// /*==================== typed js ====================*/

// const typed =new typed('.multiple-text', {
//     String: ['Full Stack Developer','MERN Stack Developer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true

// });

// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbzahcVu9o6GFTOPic-e8vXYyGBHPiLh_7ZSAERVuk63-uxulKMIuhZUH3H3_l8TXmXlVg/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })


$("#submit-form").validate({
    rules: {
        username: {
            pattern: /^[a-zA-Z ]+$/
        },
        phone: {
            pattern: /^\+?[1-9][0-9]{9}$/
        }

    },
    submitHandler: function (form) {
        $.ajax({
            
            url: "https://script.google.com/macros/s/AKfycbydh0xU-ZIzbmz2rWjWCX_q_9eDnLardtfjUiHTscX-bb3KPho4rzE75ukEVR-7-iDd/exec",
            data: $(form).serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                form.reset();
                window.location.reload()
            },
            error: function (err) {
                alert("Something Error")
            }
        })

    }
})

