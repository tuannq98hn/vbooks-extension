function execute(url) {
    const doc = fetch(url).html();
    const el = doc.select(".list-chapter li a");
    const data = [];

    el.forEach(e => {
        data.push({
            name: e.select(".chapter-text").text().trim(),
            url: e.attr("href"),
            host: "https://metruyencv.com"
        });
    });

    return Response.success(data);
}
