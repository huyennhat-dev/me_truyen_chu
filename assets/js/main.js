var $ = document.getElementById.bind(document);

function search_btn() {
    $('search_icon_x').classList.toggle('ti-close')
    $('header_search').classList.toggle('click')
    $('cl1').classList.toggle('close')

}

function menu_btn() {
    $('menu-mobile').classList.add('modal-menu-mobile--active')
    $('cl1').classList.add('d-none')
    $('panel_btn').classList.add('d-none')
}

function panel_btn() {
    $('panel-mobile').classList.add('modal-panel-mobile--active')
    $('cl1').classList.add('d-none')
    $('menu_btn').classList.add('d-none')
}

function close_menu_btn() {
    $('menu-mobile').classList.remove('modal-menu-mobile--active')
    $('cl1').classList.remove('d-none')
    $('panel_btn').classList.remove('d-none')
}

function close_panel_btn() {
    $('panel-mobile').classList.remove('modal-panel-mobile--active')
    $('cl1').classList.remove('d-none')
    $('menu_btn').classList.remove('d-none')
}

function ti_plus1() {
    $('ti_plus').classList.toggle('ti-angle-up')
    $('category_1').classList.toggle('d-block')

}

function ti_plus2() {
    $('ti_plus2').classList.toggle('ti-angle-up')
    $('tbl_rank').classList.toggle('d-block')

}

function ti_plus3() {
    $('ti_plus3').classList.toggle('ti-angle-up')
    $('profile').classList.toggle('d-block')

}

function ti_panel_1() {
    $('ti_panel_1').classList.toggle('ti-angle-up')
    $('ti_panel_1_1').classList.toggle('d-block')
}

function ti_panel_2() {
    $('ti_panel_2').classList.toggle('ti-angle-up')
    $('ti_panel_2_1').classList.toggle('d-block')
}

function ti_panel_3() {
    $('ti_panel_3').classList.toggle('ti-angle-up')
    $('ti_panel_3_1').classList.toggle('d-block')
}

function ti_panel_4() {
    $('ti_panel_4').classList.toggle('ti-angle-up')
    $('ti_panel_4_1').classList.toggle('d-block')
}

function ti_panel_5() {
    $('ti_panel_5').classList.toggle('ti-angle-up')
    $('ti_panel_5_1').classList.toggle('d-block')
}

function ti_panel_6() {
    $('ti_panel_6').classList.toggle('ti-angle-up')
    $('ti_panel_6_1').classList.toggle('d-block')
}

function ti_panel_7() {
    $('ti_panel_7').classList.toggle('ti-angle-up')
    $('ti_panel_7_1').classList.toggle('d-block')
}

function rep_comment() {
    $('rep_cmt-list').classList.add('active')
}

function remove_commet() {
    $('rep_cmt-list').classList.remove('active')
}

function list_chap() {
    $('list_chap').classList.toggle('active')
    $('ti_menu_chap').classList.toggle('ti-close')
    $('close_menu-chap').classList.toggle('active')
}

function rank_table() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";

    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function() {
            $(".tab-item.active").classList.remove("active");
            $(".tab-pane.active").classList.remove("active");

            line.style.left = this.offsetLeft + "px";
            line.style.width = this.offsetWidth + "px";

            this.classList.add("active");
            pane.classList.add("active");
        };
    });
}



rank_table();