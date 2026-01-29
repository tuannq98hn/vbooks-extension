function execute(url, page) {
    if (!page) page = '1';

    const doc = fetch(url + '?page=' + page).html();
    const el = doc.select(".manga-item");
    const data = [];

    el.forEach(e => {
        const name = e.select(".manga-name a").text().trim() ||
            e.select("h3 a").text().trim() ||
            e.select(".post-title a").text().trim();
        const link = e.select(".manga-name a").attr("href") ||
            e.select("h3 a").attr("href") ||
            e.select(".post-title a").attr("href");
        const cover = e.select("img").attr("data-src") ||
            e.select("img").attr("src");
        const description = e.select(".latest-chapter a").first().text().trim() ||
            e.select(".chapter a").first().text().trim();

        if (name && link) {
            data.push({
                name: name,
                link: link,
                cover: cover,
                description: description,
                host: "https://lxmanga.space"
            });
        }
    });

    // Check if there's a next page
    const hasNextPage = doc.select(".pagination .next").size() > 0 ||
        doc.select(".nav-previous").size() > 0;

    if (hasNextPage) {
        return Response.success(data, (parseInt(page) + 1).toString());
    } else {
        return Response.success(data);
    }
}
