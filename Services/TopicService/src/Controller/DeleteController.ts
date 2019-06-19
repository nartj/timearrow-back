import { Controller, Delete, Param, HttpError } from 'routing-controllers';
import { AbstractController } from './AbstractController'
import { RoleService } from "../Service/RoleService";

@Controller('/topic')
export class DeleteController extends AbstractController {

    @Delete('/:id')
    public async deleteTopic(@Param("id") id: number) {

        this.roleService.check(this.authenticatedUserAware.getAuthenticatedUser(), RoleService.USER);

        let topic = await this.topicService.getTopic(id);
        topic.setDeleted(true);
        await this.topicRepository.saveTopic(topic);
        throw new HttpError(204, '');
    }
}
