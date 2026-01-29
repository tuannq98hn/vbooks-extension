function execute(key, page) {
    if (!page) page = '1';

    const doc = fetch(`https://metruyencv.com/tim-kiem?q=${key}`).html();
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

    return Response.success(data);
}
