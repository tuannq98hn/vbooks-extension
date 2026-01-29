function execute() {
    return Response.success([
        { title: "Truyện mới cập nhật", input: "https://metruyencv.com/danh-sach/truyen-moi", script: "genre.js" },
        { title: "Truyện full", input: "https://metruyencv.com/danh-sach/truyen-full", script: "genre.js" },
        { title: "Tiên hiệp", input: "https://metruyencv.com/danh-sach/truyen-tien-hiep", script: "genre.js" },
        { title: "Kiếm hiệp", input: "https://metruyencv.com/danh-sach/truyen-kiem-hiep", script: "genre.js" },
        { title: "Ngôn tình", input: "https://metruyencv.com/danh-sach/truyen-ngon-tinh", script: "genre.js" },
        { title: "Đô thị", input: "https://metruyencv.com/danh-sach/truyen-do-thi", script: "genre.js" }
    ]);
}
