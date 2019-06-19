import { Event } from '../Entity/Event';
import { EventValidator } from './Validator/EventValidator';
import { HttpError } from "routing-controllers";
import { Inject, Service } from "typedi";
import {EventRepository} from "../Repository/EventRepository";

@Service()
export class EventService {

    @Inject()
    private eventValidator: EventValidator;

    @Inject()
    private eventRepository: EventRepository;

    public createEvent(eventData: any): Event {

        this.eventValidator.validateCreateData(eventData);

        return (new Event())
            .setTitle(eventData.title)
            .setFrom(eventData.from)
            .setTo(eventData.to)
            .setResume(eventData.resume)
            .setContributions(eventData.contributions)
            .setTimeline(eventData.timeline);
    }

    public updateContribution(eventData: any, event: Event) {
        this.eventValidator.validateUpdateData(eventData);

        if (eventData.title) {
            event.setTitle(eventData.title);
        }

        if (eventData.from) {
            event.setFrom(eventData.from);
        }

        if (eventData.to) {
            event.setTo(eventData.to);
        }

        if (eventData.resume) {
            event.setResume(eventData.resume);
        }

        if (eventData.contributions) {
            event.setContributions(eventData.contributions);
        }

        if (eventData.timeline) {
            event.setTimeline(eventData.timeline);
        }
    }

    public async getEvent(id: number): Promise<Event> {
        if (typeof id !== 'number' || id < 1) {
            throw new Error('event id is invalid');
        }

        let event = await this.eventRepository.findOne({id: id, deleted: false});

        if (event === undefined) {
            throw new HttpError(404, 'event not found');
        }

        return event;
    }

    public async getEvents(): Promise<Event[]> {
        return await this.eventRepository.find();
    }
}
