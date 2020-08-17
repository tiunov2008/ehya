$(document).ready(function () {
    var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    on: {
        init() {
            this.el.addEventListener("mouseenter", () => {
                this.autoplay.stop();
            });

            this.el.addEventListener("mouseleave", () => {
                this.autoplay.start();
            });
        },
    },
    });

    var headerHoverItem = $(".header__item-dropdown");
    var headerDropdown = $(".header__dropdown");
    headerHoverItem.hover(openDropdown,closeDropdown);

    function openDropdown(){
        headerDropdown.addClass("header__dropdown_visible")
    }
    function closeDropdown(){
        headerDropdown.removeClass("header__dropdown_visible")
    }


    var tabsItem = $(".start__tab");
    var contentItem = $(".start__tabs-text");

    tabsItem.on("click", function(){
        var activeContent = $(this).attr('data-target')
        tabsItem.removeClass("start__tab_active")
        contentItem.removeClass("start__tabs-text_active") 
        $(activeContent).toggleClass("start__tabs-text_active") 
        $(this).addClass("start__tab_active") 
    
    } )

    var questionsItem1 = $(".questions__answer-title");

    questionsItem1.on("click", function(){
        var activeContent = $(this).attr('data-target')
        $(this).toggleClass("questions__answer-title_active");
        $(activeContent).toggleClass("questions__answer-text_active") 
        console.log(activeContent);
    } )

    var questionsItem2 = $(".question-title");

    questionsItem2.on("click", function(){
        var activeContent = $(this).attr('data-target')
        $(this).toggleClass("question-title_active");
        $(activeContent).toggleClass("question-text_active") 
        console.log(activeContent);
    } )

    var modalButton = $("[data-toggle='modal']");
    console.log(modalButton);
    var closeButton = $(".modal__close");
    var modal = $(".modal");
    closeButton.on("click", closeModal);
    modalButton.on("click", openModal);
    $(document).keyup(function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            closeModal();
        }
    });

    function openModal() {
        modal
            .find(".modal__overlay")
            .addClass("modal__overlay_visible");
        modal.find(".modal__dialog").addClass("modal__dialog_visible");
    }

    function closeModal() {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay_visible");
        modalDialog.removeClass("modal__dialog_visible");
    }

    $(".form").each(function () {
        $(this).validate({
            errorClass: "invalid",
            errorElement: "span",
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "The name must be 2 letters or more.",
                },
                email: {
                    required: "We need your email address to contact you",
                    email:
                        "Your email address must be in the format of example@domain.com",
                },
                phone: {
                    required: "Telephone number is required",
                    minlength: "Plese, enter your full phone number.",
                },
            },
        });
    });
});
