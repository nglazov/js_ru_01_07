export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },
    openArticle(id) {
        return ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openArticleId: id
            })
        }
    }
}