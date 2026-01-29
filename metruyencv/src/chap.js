function execute(url) {
    const doc = fetch(url).html();
    let content = doc.select("#article").html();

    // Clean up content
    content = content.replace(/\n/g, '<br>');
    content = content.replace(/&nbsp;/g, ' ');

    return Response.success(content);
}
