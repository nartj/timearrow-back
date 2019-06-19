import { Topic } from '../Entity/Topic';
import { TopicValidator } from './Validator/TopicValidator';
import { HttpError } from "routing-controllers";
import { Inject, Service } from "typedi";
import {TopicRepository} from "../Repository/TopicRepository";

@Service()
export class TopicService {

    @Inject()
    private topicValidator: TopicValidator;

    public createTopic(topicData: any): Topic {

        this.topicValidator.validateCreateData(topicData);

        return (new Topic())
            .setCode(topicData.code)
            .setLibelle(topicData.libelle)
            .setBadge(topicData.badge)
            .setTimelines(topicData.timelines);
    }

    @Inject()
    private topicRepository: TopicRepository;

    public updateTopic(topicData: any, topic: Topic) {
        this.topicValidator.validateUpdateData(topicData);

        if (topicData.code) {
            topic.setCode(topicData.code);
        }

        if (topicData.libelle) {
            topic.setLibelle(topicData.libelle);
        }

        if (topicData.badge) {
            topic.setBadge(topicData.badge);
        }

        if (topicData.timelines) {
            topic.setTimelines(topicData.timelines)
        }

    }

    public async getTopic(id: number): Promise<Topic> {
        if (typeof id !== 'number' || id < 1) {
            throw new Error('topic id is invalid');
        }

        let topic = await this.topicRepository.findOne({id: id, deleted: false});

        if (topic === undefined) {
            throw new HttpError(404, 'topic not found');
        }

        return topic;
    }

    public async getTopics(): Promise<Topic[]> {
        return await this.topicRepository.find();
    }
}
