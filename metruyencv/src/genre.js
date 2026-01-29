function execute(url, page) {
    if (!page) page = '1';

    const doc = fetch(url + '?page=' + page).html();
    const el = doc.select(".book-item");
    const data = [];

    el.forEach(e => {
        data.push({
            name: e.select(".book-name a").text().trim(),
            link: e.select(".book-name a").attr("href"),
            cover: e.select(".book-img img").attr("src"),
            description: e.select(".book-author").text().trim(),
            host: "https://metruyencv.com"
        });
    });

    // Check if there's a next page
    const hasNextPage = doc.select(".pagination .next").size() > 0;

    if (hasNextPage) {
        return Response.success(data, (parseInt(page) + 1).toString());
    } else {
        return Response.success(data);
    }
}
