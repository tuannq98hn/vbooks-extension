function execute(url) {
    const doc = fetch(url).html();

    // Get manga name
    const name = doc.select("h1[itemprop='name']").text().trim() ||
        doc.select(".manga-name").text().trim();

    // Get cover image
    const cover = doc.select(".summary_image img").attr("src") ||
        doc.select(".manga-cover img").attr("src");

    // Get author
    const author = doc.select(".author-content a").text().trim() ||
        doc.select("a[href*='tac-gia']").first().text().trim();

    // Get description
    const description = doc.select(".summary__content p").html() ||
        doc.select(".manga-description").html() ||
        doc.select(".description-summary").html();

    // Get genres
    const genres = [];
    doc.select("a[href*='the-loai']").forEach(e => {
        genres.push(e.text().trim());
    });

    // Get status
    const statusText = doc.select(".post-status").text() ||
        doc.select(".manga-status").text();
    const ongoing = statusText.indexOf("Đang tiến hành") !== -1 ||
        statusText.indexOf("Ongoing") !== -1;

    return Response.success({
        name: name,
        cover: cover,
        author: author,
        description: description,
        detail: "Thể loại: " + genres.join(", "),
        ongoing: ongoing,
        host: "https://lxmanga.space"
    });
}
