function execute() {
    return Response.success([
        { title: "Gợi ý truyện", input: "https://lxmanga.space/dich/all", script: "genre.js" },
        { title: "Top bình chọn", input: "https://lxmanga.space/top", script: "genre.js" },
        { title: "Top xem nhiều", input: "https://lxmanga.space/xem-nhieu", script: "genre.js" },
        { title: "Ahegao", input: "https://lxmanga.space/the-loai/ahegao", script: "genre.js" },
        { title: "Big Breasts", input: "https://lxmanga.space/the-loai/big-breasts", script: "genre.js" },
        { title: "Full Color", input: "https://lxmanga.space/the-loai/full-color", script: "genre.js" }
    ]);
}
