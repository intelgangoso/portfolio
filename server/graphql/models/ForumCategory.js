class ForumCategory {

    constructor(model) {
        this.Model = model; // this.Model === ForumCategory
    }

    getAll() {
        return this.Model.find({});
    }

    getBySlug(slug) {
        return this.Model.findOne({slug}).populate('user');
    }
}

module.exports = ForumCategory;