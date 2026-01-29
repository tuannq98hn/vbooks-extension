function execute(url) {
    const doc = fetch(url).html();
    const imgs = [];

    // LXManga uses div#image-container with data-src attribute
    doc.select("div#image-container").forEach(e => {
        const src = e.attr("data-src");
        if (src && src.trim() !== "") {
            imgs.push(src.trim());
        }
    });

    return Response.success(imgs);
}
