////function onResizeTest() {
////    console.log("dhdpdp");

////    document.addEventListener('DOMContentLoaded', function () {
     
////    const createResizableTable = function (table) {
////        const cols = table.querySelectorAll('th');
////        [].forEach.call(cols, function (col) {
////            // Add a resizer element to the column
////            const resizer = document.createElement('div');
////            resizer.classList.add('resizer');

////            // Set the height
////            resizer.style.height = `${table.offsetHeight}px`;

////            col.appendChild(resizer);

////            createResizableColumn(col, resizer);
////        });
////    };

////    const createResizableColumn = function (col, resizer) {
////        let x = 0;
////        let w = 0;

////        const mouseDownHandler = function (e) {
////            x = e.clientX;

////            const styles = window.getComputedStyle(col);
////            w = parseInt(styles.width, 10);

////            document.addEventListener('mousemove', mouseMoveHandler);
////            document.addEventListener('mouseup', mouseUpHandler);

////            resizer.classList.add('resizing');
////        };

////        const mouseMoveHandler = function (e) {
////            const dx = e.clientX - x;
////            col.style.width = `${w + dx}px`;
////        };

////        const mouseUpHandler = function () {
////            resizer.classList.remove('resizing');
////            document.removeEventListener('mousemove', mouseMoveHandler);
////            document.removeEventListener('mouseup', mouseUpHandler);
////        };

////        resizer.addEventListener('mousedown', mouseDownHandler);
////    };

////    createResizableTable(document.getElementById('resizeMe'));
////});
////}


window.langcode = {
    scrollToBottom: function (selector) {
        let children = $(selector).children();
        if (children.length > 0) {
            children.last()[0].scrollIntoView(false);
        }
    },

    syncScroll: function (selector, targetSelector) {
        $(selector).on('scroll', function () {
            $(targetSelector).scrollTop($(this).scrollTop());
        });
        $(targetSelector).scrollTop($(this).scrollTop());
    },

    prismHighlightAll: function () {
        window.Prism.highlightAll();
        $('.code.token').click(function () {
            let elem = $(this);
            console.log(elem);
            if (elem.hasClass('code')) {
                DotNet.invokeMethodAsync(
                    'TensorflowInsight.Client',
                    'CodeTokenClicked',
                    elem.attr('data-identifier'),
                    parseInt(elem.attr('data-line'))
                );
            }
        });
    },

    markdownToHtml: function (markdown) {
        return marked(markdown);
    },

    getDomRect: function (id) {
        console.log("dd");
        let rect = document.getElementById(id).getBoundingClientRect();
        return rect;
    },

    downloadFromUrl: function (id, url, fileName) {
        const anchorElement = document.getElementById(id);
        anchorElement.href = url;
        anchorElement.target = '_blank';
        anchorElement.download = fileName ?? '';
        anchorElement.click();
    }
};