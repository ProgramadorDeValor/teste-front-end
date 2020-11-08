import { Youtube } from '~/types/Youtube/Interfaces/Youtube'

export class YoutubeResponseApi {
  public YoutubeData : Youtube | undefined;
  public errorMessage: string | undefined;
  public erroObj : object | undefined;

  constructor (
    public success : boolean
  ) {
  }
}
