function execute(url) {
    const doc = fetch(url).html();

    return Response.success({
        name: doc.select(".book-name").text().trim(),
        cover: doc.select(".book-img img").attr("src"),
        author: doc.select(".info-item a[href*='tac-gia']").first().text().trim(),
        description: doc.select(".book-intro").html(),
        detail: "Thể loại: " + doc.select(".list-tag a").map(e => e.text()).join(", "),
        ongoing: doc.select(".info-item .text-success").text().indexOf("Còn tiếp") !== -1,
        host: "https://metruyencv.com"
    });
}
