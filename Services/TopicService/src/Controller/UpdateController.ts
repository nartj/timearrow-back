import { Controller, Body, Put, Param } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/topic')
export class UpdateController extends AbstractController {

    @Put('/:id')
    public async updateTopic(@Param("id") id: number, @Body() topicData: any) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let topic = await this.topicService.getTopic(id);
        this.topicService.updateTopic(topicData, topic);
        return await this.topicRepository.saveTopic(topic);
    }
}
