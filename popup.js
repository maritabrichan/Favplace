$(document).ready(function () {

    const background = chrome.extension.getBackgroundPage();

    document.addEventListener('DOMContentLoaded', function () {

        let link = document.getElementById('addToAlbum');
        link.addEventListener('click', function () {

            let checkboxes = document.querySelectorAll('input[type=checkbox]');
            let tags = [];
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    tags.push(background.getAlbumNameFromKey(i));
                }
            }
            background.addAlbumRecord(tags);
            window.close();
        });
    });

    $("#albumSearch").on("keyup", function () {
        let input = $(this).val().toLowerCase();
        $("#albumList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
        });
    });

    $('#albumInfoTip').tooltip({boundary: 'window'})
});