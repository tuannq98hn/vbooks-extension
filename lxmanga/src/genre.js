function execute(url, page) {
    if (!page) page = '1';

    const doc = fetch(url + '?page=' + page).html();
    const el = doc.select(".manga-vertical");
    const data = [];

    el.forEach(e => {
        // Manga name is in <a> tag with href to /truyen/...
        const nameLink = e.select("a[href*='/truyen/']").last();
        const name = nameLink.text().trim();
        const link = nameLink.attr("href");

        // Cover image with lazyload
        const coverDiv = e.select(".cover.lazyload");
        const cover = coverDiv.attr("data-bg") ||
            e.select("img").attr("data-src") ||
            e.select("img").attr("src");

        // Latest chapter info
        const latestChapter = e.select(".latest-chapter a").text().trim();

        if (name && link) {
            data.push({
                name: name,
                link: link.startsWith("http") ? link : "https://lxmanga.space" + link,
                cover: cover,
                description: latestChapter,
                host: "https://lxmanga.space"
            });
        }
    });

    // Check pagination
    const nextPage = doc.select("a[rel='next']");
    const hasNextPage = nextPage.size() > 0;

    if (hasNextPage && data.length > 0) {
        return Response.success(data, (parseInt(page) + 1).toString());
    } else {
        return Response.success(data);
    }
}
