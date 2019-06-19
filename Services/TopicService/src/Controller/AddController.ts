import { Controller, Body, Post } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/topic')
export class AddController extends AbstractController {

    @Post()
    public async addTopic(@Body() topicData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let newTopic = this.topicService.createTopic(topicData);
        return await this.topicRepository.saveTopic(newTopic);
    }
}
