import { Timeline } from '../Entity/Timeline';
import { TimelineValidator } from './Validator/TimelineValidator';
import { HttpError } from "routing-controllers";
import { Inject, Service } from "typedi";
import {TimelineRepository} from "../Repository/TimelineRepository";

@Service()
export class TimelineService {

    @Inject()
    private timelineValidator: TimelineValidator;

    @Inject()
    private timelineRepository: TimelineRepository;

    public createTimeline(timelineData: any): Timeline {

        this.timelineValidator.validateCreateData(timelineData);

        return (new Timeline())
            .setTitle(timelineData.title)
            .setFrom(timelineData.from)
            .setTo(timelineData.to)
            .setResume(timelineData.resume)
            .setTopics(timelineData.topics)
            .setContributions(timelineData.contributions)
            .setEvent(timelineData.events);

    }

    public updateTimeline(timelineData: any, timeline: Timeline) {
        this.timelineValidator.validateUpdateData(timelineData);

        if (timelineData.title) {
            timeline.setTitle(timelineData.title);
        }

        if (timelineData.from) {
            timeline.setFrom(timelineData.from)
        }

        if (timelineData.to) {
            timeline.setTo(timelineData.to);
        }

        if (timelineData.resume) {
            timeline.setResume(timelineData.resume)
        }

        if (timelineData.topics) {
            timeline.setTopics(timelineData.topics);
        }

        if (timelineData.contributions) {
            timeline.setContributions(timelineData.contributions);
        }

        if (timelineData.events) {
            timeline.setEvent(timelineData.events);
        }
    }

    public async getTimeline(id: number): Promise<Timeline> {
        if (typeof id !== 'number' || id < 1) {
            throw new Error('timeline id is invalid');
        }

        let timeline = await this.timelineRepository.findOne({id: id, deleted: false});

        if (timeline === undefined) {
            throw new HttpError(404, 'timeline not found');
        }

        return timeline;
    }

    public async getTimelines(from: number, size: number): Promise<Timeline[]> {
        if (from && size)
            return this.paginate(from, size);

        return await this.timelineRepository.find();
    }

    public async paginate(from: number, size: number): Promise<Timeline[]> {
        return await this.timelineRepository.findAndCount({
            take: size,
            skip: from,
        });
    }
}
