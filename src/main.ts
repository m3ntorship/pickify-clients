import { BaseAPI } from "./client/base";
import { PostsApi, VotesApi, MediaApi as MainMediaApi } from "./client/index";
import * as axios from "axios";

class ModifiedMediaApi extends MainMediaApi {
  constructor(options: { basePath: string }) {
    super();
    this.basePath = options.basePath;
  }

  public uploadOneMedia(
    file: any,
    entityType: string,
    entityId: string,
    options?: any
  ) {
    return axios.default.post(`${this.basePath}/media`, {});
  }
}

export { PostsApi, VotesApi, ModifiedMediaApi as MediaApi };
