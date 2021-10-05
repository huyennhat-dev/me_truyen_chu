function collapse() {
    const $ = document.querySelector.bind(document);
    const collapse_list = $('.collapse')
    const collapse_btn = $('.collapse_btn')
    const menu_btn = $('.menu_btn')
    const icon_collapse_btn = $('span.ti-angle-right.ml-2.fz-13')
    collapse_btn.onclick = function() {
        collapse_list.classList.toggle('active')
        icon_collapse_btn.classList.toggle('ti-angle-down')
    }
    menu_btn.onclick = function() {
        $('.navbar-left').classList.toggle('active')
    }
}

function table_x() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-panel");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";

    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function() {
            $(".tab-item.active").classList.remove("active");
            $(".tab-panel.active").classList.remove("active");

            line.style.left = this.offsetLeft + "px";
            line.style.width = this.offsetWidth + "px";

            this.classList.add("active");
            pane.classList.add("active");
        };
    });
}

function show_pass() {
    const ipnElement = document.querySelector('#ipnPassword')
    const btnElement = document.querySelector('#btnPassword')

    btnElement.addEventListener('click', function() {
        const currentType = ipnElement.getAttribute('type')
        ipnElement.setAttribute(
            'type',
            currentType === 'password' ? 'text' : 'password'
        )
    })
}


function check_rule_btn() {
    const $ = document.querySelector.bind(document);
    const check_rules = $(".check-rules");
    const check_rules_small = $(".check-rules-small");

    check_rules.classList.toggle('active')
    check_rules_small.classList.toggle('active')
    $('.add_btn').classList.toggle('active')

}


collapse();
table_x();
show_pass();