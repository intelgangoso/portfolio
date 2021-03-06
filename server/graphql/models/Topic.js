const slugify = require('slugify');
const uniqueSlug = require('unique-slug');

class Topic {

    constructor(model, user) {
        this.Model = model; // this.Model === Topic
        this.user = user;
    }

    getBySlug(slug) {
        return this.Model.findOne({slug}).populate('user').populate('forumCategory');;
    }

    getAllByCategory(forumCategory) {
        return this.Model
            .find({forumCategory})
            .populate('user')
            .populate('forumCategory');
    }

    async _create(data) {
        const createdTopic = await this.Model.create(data);

        return this.Model.findById(createdTopic._id).populate('user').populate('forumCategory');
    }

    async create(topicData) {
        if (!this.user) {
            throw new Error('You are not authenticated to create topic.');
        }

        topicData.user = this.user;
        topicData.slug = slugify(topicData.title, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: false
        });

        let topic;
        try {
            topic = await this._create(topicData);
            return topic;
        } catch (err) {
            if (err.code === 11000 && err.keyPattern && err.keyPattern.slug) {
                topicData.slug += `-${uniqueSlug()}`;
                topic = await this._create(topicData);
                return topic;
            }

            return null;
        }
    }
}

module.exports = Topic;