import { BaseAPI } from "./client/base";
import { PostsApi, VotesApi, MediaApi as Main } from "./client/index";
import * as axios from "axios";

class Media extends Main {
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

export { PostsApi, VotesApi, Media as MediaApi };
