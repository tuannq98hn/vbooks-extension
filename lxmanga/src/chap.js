function execute(url) {
    const doc = fetch(url).html();
    const imgs = [];

    // Select all images in the reading area
    doc.select(".reading-content img").forEach(e => {
        const src = e.attr("data-src") || e.attr("src");
        if (src && src.trim() !== "") {
            imgs.push(src.trim());
        }
    });

    // Alternative selector if first one doesn't work
    if (imgs.length === 0) {
        doc.select(".page-break img").forEach(e => {
            const src = e.attr("data-src") || e.attr("src");
            if (src && src.trim() !== "") {
                imgs.push(src.trim());
            }
        });
    }

    // Another alternative
    if (imgs.length === 0) {
        doc.select("img[id^='image']").forEach(e => {
            const src = e.attr("data-src") || e.attr("src");
            if (src && src.trim() !== "") {
                imgs.push(src.trim());
            }
        });
    }

    return Response.success(imgs);
}
