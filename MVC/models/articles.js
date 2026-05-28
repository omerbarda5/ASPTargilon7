const articles = [
    {
        id: 1,
        title: 'My cake',
        author: 'John Doe',
        published: 'February 11, 2024',
        content: 'Lorem ipsum'
    },
    {
        id: 2,
        title: 'Not my cake',
        author: 'Not John Doe',
        published: 'Not February 11, 2024',
        content: 'Not Lorem ipsum'
    }
]

const getArticle = (id) => {
    return articles.filter((article) => article.id == id)[0]
}

module.exports = { getArticle }
