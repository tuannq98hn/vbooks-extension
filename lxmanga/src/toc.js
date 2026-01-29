function execute(url) {
    const doc = fetch(url).html();
    const el = doc.select(".wp-manga-chapter a");
    const data = [];

    // Read chapters in reverse order (oldest first)
    for (let i = el.size() - 1; i >= 0; i--) {
        const e = el.get(i);
        data.push({
            name: e.text().trim(),
            url: e.attr("href"),
            host: "https://lxmanga.space"
        });
    }

    return Response.success(data);
}
